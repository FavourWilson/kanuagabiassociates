import { useState, useRef } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { displayErrorToast } from "../helpers/toast";
import {
	createManager,
	updateLawyers,
	updateManager,
} from "../helpers/general";
import { CTX } from "../contexts/GlobalContext";
import IsLoading from "../components/IsLoading";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

export const ManagementForm = () => {
	const { userAuth } = CTX();
	const { id } = useParams();
	const managementToEdit = id && JSON.parse(Cookies.get("managementToEdit"));
	console.log(managementToEdit);

	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const [nonComplexApplicationDatas, setNonComplexApplicationDatas] =
		useState({
			fullName: managementToEdit ? managementToEdit.fullName : "",
			practiceArea: managementToEdit
				? managementToEdit.practiceAreas
				: "",
			location: managementToEdit ? managementToEdit.location : "",
			professionalMembership: managementToEdit
				? managementToEdit.professionalMembership
				: "",
			year: new Date().getFullYear(),
			role: managementToEdit ? managementToEdit.role : "",
			descriptions: managementToEdit ? managementToEdit.description : "",
			educationalQuaifications: managementToEdit
				? managementToEdit.educationalQualification
				: "",
			email: managementToEdit ? managementToEdit.contactEmail : "",
			addsOn: managementToEdit ? managementToEdit.addons : "",
		});

	const [uploadImage, setUploadImage] = useState("");
	const imgRef = useRef(null);
	const generalErrorRef = useRef(null);
	// const [isGmailValid, setIsGmailValid] = useState();
	const [, setIsGmailValid] = useState();

	function validateEmail(email) {
		var re =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		return re.test(email);
	}

	//submit data
	const submitData = async (e) => {
		e.preventDefault();

		// collating data
		const {
			fullName,
			practiceArea,
			location,
			professionalMembership,
			year,
			role,
			descriptions,
			educationalQuaifications,
			email,
			addsOn,
		} = nonComplexApplicationDatas;

		const totalApplicationData = new FormData();
		totalApplicationData.append("fullName", fullName);
		totalApplicationData.append("role", role);
		totalApplicationData.append(
			"professionalMembership",
			professionalMembership
		);
		totalApplicationData.append(
			"educationalQuaification",
			educationalQuaifications
		);
		totalApplicationData.append("yearOfCall", year);
		totalApplicationData.append("description", descriptions);
		totalApplicationData.append("contactEmail", email);
		totalApplicationData.append("image", uploadImage);
		totalApplicationData.append("practiceAreas", practiceArea);
		totalApplicationData.append("location", location);
		totalApplicationData.append("addons", addsOn);

		for (const pair of totalApplicationData.entries()) {
			console.log(`${pair[0]}, ${pair[1]}`);
		}
		// alerting users of errors
		let requiredError;
		for (let key in nonComplexApplicationDatas) {
			if (!nonComplexApplicationDatas[key]) {
				requiredError = true;
			}
		}
		if (requiredError) {
			console.log(generalErrorRef.current);
			generalErrorRef.current.style.display = "block";
			generalErrorRef.current.textContent =
				"All fields with asterisks are mandatory";
			return displayErrorToast("All fields with asterisks are mandatory");
		}
		if (!uploadImage) {
			if (!managementToEdit) {
				return displayErrorToast("image is required");
			}
		}

		try {
			setIsLoading(true);
			if (managementToEdit) {
				await updateManager(
					totalApplicationData,
					userAuth,
					managementToEdit._id
				);
			} else {
				await createManager(totalApplicationData, userAuth);
			}
			setIsLoading(false);
			navigate("/admin/lawfirm/kanu_agabi_dashboard/management");
		} catch (error) {
			// console.log(error);
		}
	};

	const handleImageUpload = async (e) => {
		e.preventDefault();
		const file = Object.values(e.target.files)[0];
		setUploadImage(file);
	};

	if (isLoading) {
		return <IsLoading isLoading={isLoading} />;
	}

	return (
		<section className="mx-auto w-[96%] max-w-[500px] mt-20">
			<h2 className="text-center text-4xl">Add New</h2>
			<form
				onSubmit={(e) => submitData(e)}
				className="flex flex-col flex-wrap mt-16 gap-6 "
			>
				<div className="w-100%">
					<h3 className="text-xl">* Full Name</h3>
					<div className="flex justify-between mt-3">
						<input
							className="w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
							type="text"
							name=""
							id=""
							// placeholder={data ? data.contactEmail : "Fullname"}
							onChange={(e) =>
								setNonComplexApplicationDatas({
									...nonComplexApplicationDatas,
									fullName: e.currentTarget.value,
								})
							}
							value={nonComplexApplicationDatas.fullName}
						/>
					</div>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Contact email</h3>
					<input
						className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="text"
						placeholder="Contact Email"
						value={nonComplexApplicationDatas.email}
						onChange={(e) => {
							setNonComplexApplicationDatas({
								...nonComplexApplicationDatas,
								email: e.currentTarget.value,
							});

							if (validateEmail(e.currentTarget.value)) {
								setIsGmailValid(true);

								e.currentTarget.nextElementSibling.style.display =
									"none";
							} else {
								setIsGmailValid(false);
								e.currentTarget.nextElementSibling.style.display =
									"block";
							}
						}}
					/>
					<span className="text-red-700 hidden my-2">
						<AiOutlineInfoCircle className="w-5 h-5" />
						please provide valid email address
					</span>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Role</h3>
					<input
						className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="text"
						placeholder=""
						onChange={(e) =>
							setNonComplexApplicationDatas({
								...nonComplexApplicationDatas,
								role: e.currentTarget.value,
							})
						}
						value={nonComplexApplicationDatas.role}
					/>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Location</h3>
					<input
						className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="text"
						placeholder="location"
						onChange={(e) =>
							setNonComplexApplicationDatas({
								...nonComplexApplicationDatas,
								location: e.currentTarget.value,
							})
						}
						value={nonComplexApplicationDatas.location}
					/>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Educational qualification</h3>
					<input
						className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="text"
						placeholder=""
						name=""
						id=""
						onChange={(e) =>
							setNonComplexApplicationDatas({
								...nonComplexApplicationDatas,
								educationalQuaifications: e.currentTarget.value,
							})
						}
						value={
							nonComplexApplicationDatas.educationalQuaifications
						}
					/>
					<span className="flex my-2">
						<AiOutlineInfoCircle className="w-5 h-5" /> &nbsp;
						multiple entries should be separated with commas
					</span>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Professional membership</h3>
					<div className="">
						<input
							className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
							type="text"
							placeholder=""
							name=""
							id=""
							value={
								nonComplexApplicationDatas.professionalMembership
							}
							onChange={(e) =>
								setNonComplexApplicationDatas({
									...nonComplexApplicationDatas,
									professionalMembership:
										e.currentTarget.value,
								})
							}
						/>
						<span className="flex my-2">
							<AiOutlineInfoCircle className="w-5 h-5" /> &nbsp;
							multiple entries should be separated with commas
						</span>
					</div>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Year of call</h3>
					<input
						className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="number"
						placeholder=""
						name=""
						id=""
						min="1900"
						max="2099"
						step="1"
						required
						onChange={(e) =>
							setNonComplexApplicationDatas({
								...nonComplexApplicationDatas,
								year: e.currentTarget.value,
							})
						}
						value={nonComplexApplicationDatas.year}
					/>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Practice areas</h3>
					<div className="">
						<input
							className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
							type="text"
							placeholder=""
							name=""
							id=""
							onChange={(e) => {
								setNonComplexApplicationDatas({
									...nonComplexApplicationDatas,
									practiceArea: e.currentTarget.value,
								});
							}}
							value={nonComplexApplicationDatas.practiceArea}
						/>
						<span className="flex my-2">
							<AiOutlineInfoCircle className="w-5 h-5" /> &nbsp;
							multiple entries should be separated with commas
						</span>
					</div>
				</div>

				<div className="w-100% ">
					<h3 className="text-xl">* Image</h3>
					<input
						ref={imgRef}
						className="mt-3 w-[70%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="file"
						placeholder=""
						name="image"
						onChange={handleImageUpload}
						id=""
					/>
					<span className="italics hidden text-red-700 mt-1 font-bold"></span>
				</div>

				<div className="w-100%">
					<h3 className="text-xl">* Description</h3>
					<textarea
						className=" mt-3 pl-3 w-[100%] focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						name=""
						id=""
						cols={20}
						rows={10}
						onChange={(e) =>
							setNonComplexApplicationDatas({
								...nonComplexApplicationDatas,
								descriptions: e.currentTarget.value,
							})
						}
						value={nonComplexApplicationDatas.descriptions}
					></textarea>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Adds on</h3>
					<input
						className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="text"
						placeholder="comments"
						name=""
						id=""
						onChange={(e) =>
							setNonComplexApplicationDatas({
								...nonComplexApplicationDatas,
								addsOn: e.currentTarget.value,
							})
						}
						value={nonComplexApplicationDatas.addsOn}
					/>
				</div>
				<span
					className="hidden font-bold text-base text-red-700"
					ref={generalErrorRef}
				></span>
				<button
					type="submit"
					className="w-[60%] mt-12 h-[44px]  bg-[#fca311] self-center rounded-md form__button text-2xl"
				>
					Submit
				</button>
			</form>
		</section>
	);
};
