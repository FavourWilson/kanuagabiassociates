import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Careers = () => {
  return (
    <Layout>
      <main>
        <section className="team__header careers__bg">
          <div className="team__header--box locations__top-help">
            <h1 className="heading__main">career</h1>
          </div>
        </section>
        <section className="careers__intro">
          <h2 className="careers__intro-text">
            <b> At Kanu G. Agabi & Associates</b> , we look for minds keen at
            adding value to the legal profession and the society through the
            proffering of sustainable solutions to salient legal issues
            affecting our clients.
          </h2>
          <h3 className="careers__break careers__intro-text">
            We are committed not only to achieving our clients' goals, but also
            to ensuring the personal and professional satisfaction of our
            attorneys and staff.
          </h3>
          <h2 className="careers__intro-text">
            Our team sets high standards of professionalism and friendship, and
            we maintain this atmosphere by adding attorneys and staff who share
            our goal of always providing our clients with excellent legal
            representation. We are also looking for people who want to work as
            part of a team in the workplace and who want to respect other
            people.
          </h2>
        </section>
        <section className="careers__foot careers__intro">
          <h2 className="careers__intro-text">
            We look forward to hearing from you.
          </h2>
          <a
            href="/careers/opportunities"
            className="careers__break careers__intro-text careers__link"
          >
            Click here to view our current opportunities.
          </a>
        </section>
        <Footer />
      </main>
    </Layout>
  );
};

export default Careers;
