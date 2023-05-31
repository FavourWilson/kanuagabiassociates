import Layout from "../components/Layout";
import { IoArrowForward } from "react-icons/io5";
import AboutTextCard from "../components/AboutTextCard";
import { aboutDataOne, aboutDataTwo } from "../data/About";

// @ts-ignore
// import employee from "../assets/images/employee.png";
// import UserCard from "../components/UserCard";
import Footer from "../components/Footer";
const Services = () => {
  return (
    <Layout classhelp="navhelp" classhelp2="navmainhelp">
      <main>
        <section className="services__main">
          <div className="services__header">
            <h3>family law</h3>
          </div>
          <div className="services__intro">
            <h3>Lending our experience</h3>
            <p>
              Your kanu G. Law banking and financial services lawyer is
              experienced in all aspects of private and institutional lending.
            </p>
            <p>
              Our lawyers represent banks, credit unions, and other financial
              institutions in structuring lending agreements that protect their
              interests and allow them to lend with confidence. We ensure that
              all banking and financial documentation is detailed, complete, and
              customized to the particular situation at hand.
            </p>
            <p>
              We also represent borrowers as they seek financing. Our experience
              on both sides of the table gives our banking and financial
              services lawyers the ability to understand and anticipate the
              needs, expectations, and responsibilities of all parties to any
              loan transaction. We offer advice and services in the following
              areas:
            </p>
            <ul>
              <li>Debt finance</li>
              <li>Corporate leasing</li>
              <li>Private equity</li>
              <li> Secured, asset-based lending</li>
              <li>Trade finance</li>
              <li>
                Structured finance, customized for our clients’ unique needs
              </li>
            </ul>
          </div>
        </section>
        <section className="services__exp">
          <h3>
            “Represented lender on a $125,000,000+ refinancing of various credit
            facilities for a multinational manufacturer with assets located
            across Canada and in the United States.”
          </h3>
        </section>
        <section className="about__exp">
          <div className="about__exp-box">
            <h2>name</h2>
          </div>
          <AboutTextCard text={aboutDataOne[0]} />
          <AboutTextCard text={aboutDataOne[1]} />
          <AboutTextCard text={aboutDataOne[2]} />
          <AboutTextCard text={aboutDataOne[3]} />
          <AboutTextCard text={aboutDataOne[4]} />
          <AboutTextCard text={aboutDataOne[5]} />
          <AboutTextCard text={aboutDataOne[6]} />
          <AboutTextCard text={aboutDataOne[7]} />
          <AboutTextCard text={aboutDataOne[8]} />
          <AboutTextCard text={aboutDataOne[9]} />
          <AboutTextCard text={aboutDataOne[10]} />
          <AboutTextCard text={aboutDataOne[11]} />
          <AboutTextCard text={aboutDataOne[12]} />
          <AboutTextCard text={aboutDataOne[13]} />
          <AboutTextCard text={aboutDataOne[14]} />
          <AboutTextCard text={aboutDataOne[15]} />
          <AboutTextCard text={aboutDataOne[16]} />
          <AboutTextCard text={aboutDataOne[17]} />
          <AboutTextCard text={aboutDataOne[18]} />
        </section>
        <section className="about__exp2">
          <AboutTextCard text={aboutDataTwo[0]} />
          <AboutTextCard text={aboutDataTwo[1]} />
          <AboutTextCard text={aboutDataTwo[2]} />
          <AboutTextCard text={aboutDataTwo[3]} />
          <AboutTextCard text={aboutDataTwo[4]} />
          <AboutTextCard text={aboutDataTwo[5]} />
          <AboutTextCard text={aboutDataTwo[6]} />
          <AboutTextCard text={aboutDataTwo[7]} />
          <AboutTextCard text={aboutDataTwo[8]} />
          <AboutTextCard text={aboutDataTwo[9]} />
          <AboutTextCard text={aboutDataTwo[10]} />
        </section>
        {/* <section className="services__display">
          <h2>20 Lawyers in Alternative Dispute Resolution</h2>
          <div className="services__usercard-container">
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
            <UserCard image={employee} />
          </div>
        </section> */}
        <section className="services__ext">
          <h3>What we've said.</h3>
          <div className="services__ext-cont">
            <div className="services__ext-box">
              <h2>Finding Funding</h2>
              <p>Published on 26.07.22</p>
            </div>
            <div className="services__ext-box">
              <a href="/">
                <div>
                  <IoArrowForward />
                </div>
                Visit Insights for more articles.
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Layout>
  );
};

export default Services;
