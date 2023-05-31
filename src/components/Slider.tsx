import React from "react";
import { base_url } from "../utils/config";

const Slider = ({
	index,
	curSlide,
	items,
}: {
	index: number;
	curSlide: number;
	items: any;
}) => {
	return (
		<div
			className="slider__container"
			style={{ transform: `translateX(${100 * (index - curSlide)}%)` }}
		>
			{items?.map((item: any) => (
				<a href={`/management/${item._id}`}>
					<img
						key={item._id}
						src={`${base_url}/lawyerImages/${item.image}`}
						alt={`${item.fullName}'s profile`}
						className="slider__image"
					/>
				</a>
			))}
		</div>
	);
};

/* <div
      className="slider__container"
      style={{ transform: `translateX(${100 * (index - curSlide)}%)` }}
    >
      <img src={images[0]} alt="office1" className="slider__image" />
      <img src={images[1]} alt="office1" className="slider__image" />
      <img src={images[2]} alt="office1" className="slider__image" />
    </div> */

export const SliderSingle = ({
	index,
	curSlide,
	images,
}: {
	index: number;
	curSlide: number;
	images: any;
}) => {
	return (
		<div
			className="slider__container"
			style={{ transform: `translateX(${100 * (index - curSlide)}%)` }}
		>
			<img src={images} alt="office1" className="slider__image" />
		</div>
	);
};

export default Slider;
