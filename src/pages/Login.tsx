import "../style-form.css";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { emailRegex } from "../utils/config";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loginUser, registerUser } from "../helpers/general";
import { useNavigate } from "react-router-dom";
import IsLoading from "../components/IsLoading";

export const Login = () => {
	const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [page, setPage] = useState<string | undefined>();
	const location = useLocation();
	let navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === "/signup") {
			setPage("Sign Up");
		}
		if (location.pathname === "/login") {
			setPage("Login");
		}
	}, [location]);

	const handlePasswordVisibility = () => {
		setPasswordIsVisible(!passwordIsVisible);
	};
	const userLoginSchema = yup.object().shape({
		email: yup
			.string()
			.matches(emailRegex, "Please put in a valid email")
			.required("An email is required to be authenticated"),
		password: yup
			.string()
			// .length(8, "Password must be at least 8 characters")
			.required("password is required"),
	});

	const handleUserLogin = async (values: any) => {
		console.log(values);

		if (location.pathname === "/signup") {
			setIsLoading(true);
			const response = await registerUser(values)!;
			setIsLoading(false);

			if (response?.status === 201) {
				navigate("/admin/lawfirm/kanu_agabi_dashboard/management", {
					replace: true,
				});
			}
		}

		if (location.pathname === "/login") {
			setIsLoading(true);

			const response = await loginUser(values)!;
			setIsLoading(false);

			if (response?.status === 200) {
				navigate("/admin/lawfirm/kanu_agabi_dashboard/management", {
					replace: true,
				});
			}
		}
	};
	if (isLoading) {
		return <IsLoading isLoading={isLoading} />;
	}
	return (
		<section>
			<section className="mt-60 flex justify-center items-center max-w-[340px] text-base  w-[92%] mx-auto">
				<div className="flex flex-col gap-4 w-[100%] ">
					<h1 className="text-4xl font-bold text-center font-RobotoCondensed">
						{page}
					</h1>
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						validationSchema={userLoginSchema}
						onSubmit={handleUserLogin}
					>
						{({ errors, touched }) => (
							<Form>
								{errors.email && touched.email && (
									<p className="form__error mt-4 mb-1">
										{errors.email}
									</p>
								)}
								<div className="login-input-container mb-6 border-[1px] rounded relative border-black focus-within:outline-none focus-within:border-black  w-[100%] h-[56px]">
									<Field
										className="appearance-none absolute text-xl pl-4 placeholder:text-xl  focus:outline-none w-[100%] h-[100%] login-input bg-transparent"
										type="email"
										placeholder="Email address"
										name="email"
									/>
								</div>
								{errors.password && touched.password && (
									<p className="form__error mt-4 mb-1">
										{errors.password}
									</p>
								)}
								<div className="login-input-container border-[1px] rounded relative border-black focus-within:outline-none focus-within:border-black  w-[100%] h-[56px]">
									<Field
										className="appearance-none absolute pl-4  placeholder:text-xl text-xl focus:outline-none w-[100%] h-[100%] login-input bg-transparent"
										type={
											passwordIsVisible
												? "text"
												: "password"
										}
										placeholder="Password"
										name="password"
										id=""
									/>
									{passwordIsVisible ? (
										<IoEyeOff
											className="w-6 h-6 absolute top-[1.8em] right-4 cursor-pointer"
											onClick={handlePasswordVisibility}
										/>
									) : (
										<IoEyeSharp
											className="w-6 h-6 absolute top-[1.8em] right-4 cursor-pointer"
											onClick={handlePasswordVisibility}
										/>
									)}
								</div>
								<button
									className="h-[56px] mt-10  w-[100%]  text-black text-[18px] font-medium form__button"
									type="submit"
								>
									Submit
								</button>
							</Form>
						)}
					</Formik>

					<span className=" text-center text-lg">
						Don't have an account? &nbsp;
						<a
							href={page === "Sign Up" ? "/login" : "/signup"}
							className="text-black"
						>
							{page === "Sign Up" ? "Login " : "Signup "}here
						</a>
					</span>
				</div>
			</section>
		</section>
	);
};
