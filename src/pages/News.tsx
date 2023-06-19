import React from "react";
import Layout from "../components/Layout";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import useArticle from "../customs/useArticle";
import { articleUrl } from "../utils/urls";
import { useNavigate } from "react-router-dom";

const News = () => {
  	const { data } = useArticle(articleUrl);
    const navigate = useNavigate();
  return (
    <Layout>
      <>
        
          {data?.length >= 1 ? (
        data?.map((
          news:any
        )=>(

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
                  <h2 className="news__main-date">{ news.entryDate}</h2>
                          <h1 className="news__main-head">
                            {news.newsHeader}
                          </h1>
                          <p className="news__main-det">
                            {news.description}
                          </p>
                        </div>
                        <a href={`/news/detail/${news._id}`} className="news__main-link">
                          read more <HiArrowLongRight className="news__icon" />
                        </a>
                        <div className="news__main-share">
                          <IoShareSocialOutline className="news__icon2" /> share
                        </div>
                      </div>
                    </section>
                    <Footer />
                  </main>


        ))
      ) : (
          <div className="admin__empty">
							<p className="admin__empty-text">
								There are News to display............
							</p>
						</div>
      )}
      </>
      
    </Layout>
  );
};

export default News;
