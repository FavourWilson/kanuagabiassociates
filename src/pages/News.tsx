import React from "react";
import Layout from "../components/Layout";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import Footer from "../components/Footer";
const News = () => {
  return (
    <Layout>
      <main>
        <section className="team__header news__bg">
          <div className="team__header--box locations__top-help">
            <h1 className="heading__main">news and articles</h1>
            <h2 className="news__text">Insights</h2>
          </div>
        </section>
        <section className="news__main">
          <div className="news__main-box">
            <div>
              <h2 className="news__main-date">July 20, 2022</h2>
              <h1 className="news__main-head">
                Building a career in the legal profession - Prospects and
                Challenges
              </h1>
              <p className="news__main-det">
                The lawyer’s Pledge I am a Lawyer, For whom the time has comeTo
                avail myself of all my talents as a a minister in the temple...
              </p>
            </div>
            <a href="/news/detail" className="news__main-link">
              read more <HiArrowLongRight className="news__icon" />
            </a>
            <div className="news__main-share">
              <IoShareSocialOutline className="news__icon2" /> share
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Layout>
  );
};

export default News;
