import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import CalabarTeam from "../components/CalabarTeam";
import AbujaTeam, { SearchInputTeam } from "../components/AbujaTeam";
import UyoTeam from "../components/UyoTeam";
import LagosTeam from "../components/LagosTeam";
import IsLoading from "../components/IsLoading";
import { LawyerUrl } from "../utils/urls";
import useFetch from "../customs/useFetch";

import Slider, { SliderSingle } from "../components/Slider";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { nextSlide, prevSlide } from "../helpers/SliderFunctions";
import { sliderData, sliderDataSingle } from "../data/SliderData";
import { base_url } from "../utils/config";

const Team = () => {
	const [location, setLocation] = useState<string>("abuja");
	const [filteredData, setFilteredData] = useState<any>("");

	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [id, setId] = useState<any>();

	const { data, isLoading } = useFetch(LawyerUrl);

	useEffect(() => {
		/* const id = setInterval(() => {
			nextSlide(slideIndex, sliderData, setSlideIndex, id);
		}, 6000);

		setId(id); */
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slideIndex]);

	const handleLocationChange = (e: any) => {
		setLocation(e.target.value);
	};

	const getFilteredData = (query: string, data: any) => {
		if (!query) return data;
		return data.filter((lawyer: any) =>
			lawyer.fullName.toLowerCase().includes(query)
		);
	};

	const handleLawyerSearchText = (e: any) => {
		const query = e.target.value;

		const filteredData = getFilteredData(query, data);
		if (query.length < 1) {
			setFilteredData(null);
		} else {
			setFilteredData(filteredData);
		}
		console.log(query, "first", filteredData);
	};

	if (isLoading) {
		return <IsLoading isLoading={isLoading} />;
	}

	console.log(`Lawyers: `, data);

	return (
		<Layout>
			<main>
				<section className="team__header">
					<div className="team__header--box">
						<h1 className="heading__main">our team</h1>
					</div>
				</section>
				<section className="team__intro">
					<h2 className="intro__text">
						At Kanu G. Law, we seek, attract, and celebrate legal
						professionals who are shaped by Values,Inspired by our
						clients, and driven to succeed
					</h2>
				</section>

				{/*  */}
				<div className="filter">
					<div className="filter__box1">
						<h2 className="assist">Filter by role</h2>
						<p>lawyers</p>
						<p>leadership</p>
					</div>
					<div className="filter__box2">
						<div className="item1">
							<p>Search by Location</p>
						</div>
						<div className="item3">
							<p>Search by name</p>
						</div>
						<select
							onChange={handleLocationChange}
							className="item4"
						>
							<option selected value="abuja">
								abuja
							</option>
							<option value="uyo">uyo</option>
							<option value="lagos">lagos</option>
							<option value="calabar">calabar</option>
						</select>
						<input
							type="text"
							placeholder="search"
							className="item6"
							// @ts-ignore
							onChange={handleLawyerSearchText}
						/>
					</div>
				</div>

				{filteredData && <SearchInputTeam data={filteredData} />}
				{!filteredData && data && location === "abuja" && (
					<AbujaTeam data={data} />
				)}
				{!filteredData && data && location === "uyo" && (
					<UyoTeam data={data} />
				)}
				{!filteredData && data && location === "lagos" && (
					<LagosTeam data={data} />
				)}
				{!filteredData && data && location === "calabar" && (
					<CalabarTeam data={data} />
				)}
				<Footer />
			</main>
		</Layout>
	);
};

export default Team;
