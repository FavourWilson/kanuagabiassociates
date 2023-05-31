import Layout from "../components/Layout";
import { IoArrowForward } from "react-icons/io5";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useFetchSingle from "../customs/useFetchSingle";
import { LawyerUrl, managementUrl } from "../utils/urls";
import IsLoading from "../components/IsLoading";
import { base_url } from "../utils/config";
import useManagersFetch from "../customs/useManagersFetch";

const ManagementProfile = () => {
	const { id } = useParams();
	const { data, isLoading } = useManagersFetch(`${managementUrl}${id}`);

	if (isLoading) {
		return <IsLoading isLoading={isLoading} />;
	}

	console.log(data);

	return (
		<Layout classhelp="navhelp" classhelp2="navmainhelp">
			{data && (
				<main>
					<section className="practice__main">
						<div className="practice__header">
							<a href="/team">
								our team{" "}
								<IoArrowForward className="practice__icon" />
							</a>
						</div>
						<div className="practice__details">
							<h2>{data?.name}</h2>
							<div className="practice__details-box">
								<div>
									<h3>{data.role}</h3>
									<p>{data?.description}</p>
								</div>
								<img
									src={`${base_url}/lawyerImages/${data.image}`}
									alt="img"
								/>
							</div>
						</div>
						<div className="practice__contact">
							<h2>Contact</h2>
							<p>
								<IoArrowForward className="practice__contact-icon" />
								{data?.contactEmail}
							</p>
						</div>
					</section>
					<section className="practice__exp">
						<div className="practice__exp-box1">
							<p>{data?.addons}</p>
						</div>
						<div className="practice__exp-box2">
							<h2>Education</h2>
							<p>Year Of Call: {data?.yearOfCall}.</p>
							<p>
								Qualification/ Certificate:
								<b>
									{data?.educationalQualification.map(
										(el: any, i: number) => {
											if (
												data?.educationalQualification
													.length -
													1 ===
												i
											) {
												return <b key={el}>{el}</b>;
											} else {
												return (
													<b key={el}>{`${el}, `}</b>
												);
											}
										}
									)}
								</b>
							</p>
							<p>
								Profession Membership:
								<b>
									{data.professionalMembership.map(
										(el: any, i: number) => {
											if (
												data.educationalQualification
													.length -
													1 ===
												i
											) {
												return <b key={el}>{el}</b>;
											} else {
												return (
													<b key={el}>{`${el}, `}</b>
												);
											}
										}
									)}
								</b>
							</p>
						</div>
					</section>
					<section className="practice__exp2">
						<div>
							<h2>Pratice Areas</h2>
							<ul>
								{data.practiceAreas.map((el: string) => (
									<li key={el}>
										<IoArrowForward className="practice__exp2-icon" />
										{el}
									</li>
								))}
							</ul>
						</div>
					</section>
					<section className="practice__foot">
						<div className="services__ext-box">
							<a href="/insights">
								<div>
									<IoArrowForward />
								</div>
								Visit Insights for more articles.
							</a>
						</div>
					</section>
					<Footer />
				</main>
			)}
		</Layout>
	);
};

export default ManagementProfile;
