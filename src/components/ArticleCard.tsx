import React from "react";
import { motion } from "framer-motion";

import { IoReturnDownForwardOutline } from "react-icons/io5";
interface IArticleCard {
  img: string;
  heading: string;
  text: string;
  link: string;
}

const ArticleCard = ({ img, heading, text, link }: IArticleCard) => {
  return (
    <motion.div
      className="home__articles-box"
      whileInView={{ opacity: 1, y: 0, translateX: 0 }}
      initial={{ opacity: 0, y: 20, translateX: -50 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <img src={img} alt="news post" />
      <h1>{heading}</h1>
      <h3>{link} </h3>
      <p>{text}</p>
      <a href="/news/detail">
        <IoReturnDownForwardOutline className="iconlink" />
        READ THE POST
      </a>
    </motion.div>
  );
};

export default ArticleCard;
