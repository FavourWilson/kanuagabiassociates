import { HiArrowLongRight } from "react-icons/hi2";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Insights = () => {
  return (
    <Layout>
      <main>
        <section className="team__header insights__bg">
          <div className="team__header--box locations__top-help">
            <h1 className="heading__main">insights</h1>
          </div>
        </section>
        <section className="careers__intro">
          <h2 className="careers__intro-text insights__text">
            Read our Firm’s latest <b>News,</b> <b> Events</b> and
            <b> Articles</b>.
          </h2>
        </section>
        <section className="careers__intro">
          <div className="insights__info">
            <h2 className="careers__intro-text insights__text insights__text-bold">
              Our Services
            </h2>
            <h3 className="insights__text-light insights__text">
              Choose the Practice Areas or Industry
            </h3>
          </div>
        </section>
        <section className="careers__intro">
          <div className="insights__main">
            <div className="insights__main-1">
              <p className="insights__text-main">
                Alternative Dispute Resolution
              </p>
              <div className="insights__main-1--box">
                <p className="insights__text-news">Published 12/09/22</p>
                <p className="insights__text-news insights__text-newshelp">
                  Articles
                </p>
              </div>
            </div>

            <div className="insights__main-2">
              <div className="insights__iconbox">
                <HiArrowLongRight className="insights__icon" />
              </div>

              <p className="insights__text-details">read more</p>
            </div>
          </div>
          <div className="insights__main">
            <div className="insights__main-1">
              <p className="insights__text-main">
                Congratulations to our Newst Associates on their 2022 Call to
                the Bar
              </p>
              <div className="insights__main-1--box">
                <p className="insights__text-news">Published 12/09/22</p>
                <p className="insights__text-news insights__text-newshelp">
                  Articles
                </p>
              </div>
            </div>

            <div className="insights__main-2">
              <div className="insights__iconbox">
                <HiArrowLongRight className="insights__icon" />
              </div>

              <p className="insights__text-details">read more</p>
            </div>
          </div>
          <div className="insights__main insights__main-help">
            <div className="insights__main-1">
              <p className="insights__text-main">
                Crucial Steps to Protect Your Business from Cyber Threats.
              </p>
              <div className="insights__main-1--box">
                <p className="insights__text-news">Published 12/09/22</p>
                <p className="insights__text-news insights__text-newshelp">
                  Articles
                </p>
              </div>
            </div>

            <div className="insights__main-2">
              <div className="insights__iconbox">
                <HiArrowLongRight className="insights__icon" />
              </div>

              <p className="insights__text-details">read more</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Layout>
  );
};

export default Insights;
