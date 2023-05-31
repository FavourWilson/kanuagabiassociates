import React from "react";
import { motion } from "framer-motion";

export const DetContainer1 = ({
  img,
  heading,
  text,
}: {
  img: string;
  heading: string;
  text: string;
}) => {
  return (
    <motion.div
      className="home__details-container1"
      whileInView={{ opacity: 1, y: 0, translateX: 0 }}
      initial={{ opacity: 0, y: 20, translateX: -50 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="home__details-box">
        <img src={img} alt="constitutional law" />
        <h3>{heading}</h3>
        <p>{text}</p>
        {/* <a href="/">learn more</a> */}
      </div>
    </motion.div>
  );
};
export const DetContainer2 = ({
  img,
  heading,
  text,
}: {
  img: string;
  heading: string;
  text: string;
}) => {
  return (
    <motion.div
      className="home__details-container2"
      whileInView={{ opacity: 1, y: 0, translateX: 0 }}
      initial={{ opacity: 0, y: 20, translateX: -50 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="home__details-box">
        <img src={img} alt="constitutional law" />
        <h3>{heading}</h3>
        <p>{text}</p>
        {/* <a href="/">learn more</a> */}
      </div>
    </motion.div>
  );
};

export default DetContainer1;
