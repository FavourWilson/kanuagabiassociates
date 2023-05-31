import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Opportunities = () => {
  return (
    <Layout>
      <main>
        <section className="team__header opportunity__bg">
          <div className="team__header--box locations__top-help">
            <h1 className="heading__main">Careers opportunities </h1>
          </div>
        </section>
        <section className="careers__intro">
          <h2 className="opportunity__intro-text">
            We do not have any open opportunities at this time.
          </h2>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default Opportunities;
