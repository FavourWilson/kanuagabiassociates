// import { HiChevronDown } from "react-icons/hi2";
import { DetContainer1, DetContainer2 } from "../components/DetContainer1";
import { detailsContainerData, newsContainerData } from "../data/Home";
import { IoArrowForwardOutline } from "react-icons/io5";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

import Slider, { SliderSingle } from "../components/Slider";

import { useState, useEffect } from "react";
import { nextSlide, prevSlide } from "../helpers/SliderFunctions";
import { sliderData, sliderDataSingle } from "../data/SliderData";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import useManagersFetch from "../customs/useManagersFetch";
import { managementUrl } from "../utils/urls";
import useManagersSlideFetch from "../customs/useManagersSlideFetch";
import { base_url } from "../utils/urls";

const data1 = detailsContainerData[0];
const data2 = detailsContainerData[1];
const data3 = detailsContainerData[2];
//news container
const data4 = newsContainerData[0];
const data5 = newsContainerData[1];

const Home = () => {
	const [managementSlideData, setmanagementSlideData] = useState<any>([]);
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [id, setId] = useState<any>();
	const { data, setData, isLoading } = useManagersSlideFetch(managementUrl);

	useEffect(() => {
		/* const id = setInterval(() => {
			nextSlide(slideIndex, sliderData, setSlideIndex, id);
		}, 6000);

		setId(id); */
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slideIndex]);

	useEffect(() => {
		// var slide1 = { id: 1, images: new Array<string>() };
		/* data?.slice(0, 3)?.forEach((e: any, i: number) => {
			// slide1.images?.push(e.image);
			slide1 = {
				id: e._id,
				images: [
					...slide1.images,
					`${base_url}/lawyerImages/${e.image}`,
				],
			};
		}); */
		// managementSlideData.push(slide1);
		/* 
		export const sliderData: { id: number; images: string[] }[] = [
			{
				id: 1,
				images: [img4, img1, img5],
			},
			{
				id: 2,
				images: [img6, img2, img3],
			},
		];
		*/
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<Layout>
			<main>
				<div className="home__header">
					<motion.div
						className="home__box"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<h1 className="home__heading">
							"The rights that you have over others- Forget them.
						</h1>
						<h1 className="home__heading">
							The Rights that others have over you- Remember
							them."
						</h1>
						<p className="home__text">- Kanu G. Agabi (CON) SAN</p>
					</motion.div>
					<motion.div
						className="home__box2"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						{/* <p className="home__btn">scroll down</p> */}
						{/* <HiChevronDown className="home__btn-icon" /> */}
					</motion.div>
				</div>
				<section className="home__intro">
					<div className="home__intro-box">
						<h2 className="home__intro-heading">CORE VALUE</h2>
						<p className="home__intro-text">
							Upholding the truth and promoting the rule of law
							and justice through credible legal advice and
							representation.
						</p>
					</div>
					<div className="home__intro-container">
						<div className="home__intro-box2">
							<h3 className="home__intro-box2-heading">
								OUR MOTTO
							</h3>
							<p className="home__intro-box2-text">
								The Rights that you have over others- Forget
								them,
							</p>
							<p className="home__intro-box2-text">
								The Rights that others have over you - Remember
								them.
							</p>
						</div>
						<div className="home__intro-box2">
							<h3 className="home__intro-box2-heading">
								OUR MISSON
							</h3>
							<p className="home__intro-box2-text">
								We always strive to provide outstanding client
								and community service, and are committed to
								client satisfaction, public growth and
								development, as we consider their satisfaction
								to be the best measure of our success.
							</p>
						</div>
						<div className="home__intro-box2">
							<h3 className="home__intro-box2-heading">
								OUR VISION
							</h3>
							<p className="home__intro-box2-text">
								At Kanu G. Agabi and Associates, we endeavour to
								be our Clients' Trusted Advisors. When it comes
								to honesty and timely legal counsel in the
								ever-changing legal world, we strive to remain
								the first port of call for all and sundry.
							</p>
						</div>
					</div>
				</section>
				<section className="home__services">
					<div className="home__intro-box">
						<h2 className="home__services-heading">OUR SERVICES</h2>
						<p className="home__services-text">
							Kanu G. Agabi & Associates is a multidisciplinary
							law firm that serves a wide range of clients. With
							50 years of experience, we are able to provide the
							proficiency necessary to help our clients resolve
							and navigate their complex legal issues.
						</p>
					</div>
				</section>
				<section className="home__details">
					<DetContainer1
						img={data1.image}
						heading={data1.heading}
						text={data1.text}
					/>
					<DetContainer2
						img={data2.image}
						heading={data2.heading}
						text={data2.text}
					/>
					<DetContainer1
						img={data3.image}
						heading={data3.heading}
						text={data3.text}
					/>
				</section>
				<section className="slider__section">
					<div className="slider__controls">
						<h2>meet with our management team</h2>
						<div className="slider__btnbox">
							<button
								className="slider__btn slider__btn-1"
								onClick={() =>
									prevSlide(
										slideIndex,
										data,
										setSlideIndex,
										id
									)
								}
							>
								<IoArrowBack className="slider__icon slider__icon-1" />
								previous
							</button>
							<button
								className="slider__btn"
								onClick={() =>
									nextSlide(
										slideIndex,
										data,
										setSlideIndex,
										id
									)
								}
							>
								next
								<IoArrowForward className="slider__icon slider__icon-2" />
							</button>
						</div>
					</div>
					<div className="slider slider__invisible">
						{data?.map((items: any, i: number) => (
							<Slider
								index={i}
								curSlide={slideIndex}
								items={items}
								key={i}
							/>
						))}
					</div>
				</section>
				<section className="home__articles">
					<motion.div
						className="home__articles-link"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<a href="/">
							see more{" "}
							<IoArrowForwardOutline className="home__articles-icon" />
						</a>
					</motion.div>
					<div className="home__articles-container">
						<h2>news & articles</h2>
						<div className="home__articles-content">
							<ArticleCard
								img={data4.image}
								heading={data4.heading}
								text={data4.text}
								link={data4.link}
							/>
							<ArticleCard
								img={data5.image}
								heading={data5.heading}
								text={data5.text}
								link={data5.link}
							/>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</Layout>
	);
};

export default Home;
