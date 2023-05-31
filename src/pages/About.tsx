import React from "react";
// import AboutTextCard from "../components/AboutTextCard";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
// import { aboutDataOne, aboutDataTwo } from "../data/About";

const About = () => {
	return (
		<Layout>
			<main>
				<div className="about__header">
					<div className="about__box">
						<h1 className="about__heading">about us</h1>
					</div>
				</div>
				<section className="about__intro">
					<h3>
						Kanu G. Agabi & Associates, established in 1972, is one
						of Nigeria’s leading law firms with branches in Abuja,
						Calabar, Lagos and Uyo. The firm has a staff strength
						consisting of over seventy lawyers and thirty support
						staff.
					</h3>
					<p>
						Kanu G. Agabi & Associates provides complete
						multidisciplinary legal services with clientele spanning
						but not limited to Federal and State Governments and
						their Institutions and agencies, Universities,
						Multinational and National Corporations, Financial
						Institutions, and Private Citizens.The firm comprises
						Senior Nigerian and United Kingdom qualified lawyers who
						are specialists in a variety of disciplines. It is
						headed by Kanu G. Agabi (CON) SAN, a former
						Attorney-General of the Federal Republic of Nigeria, who
						has extensive experience in legal practice & public
						advocacy.
					</p>
				</section>
				{/*  <section className="about__details">
          <div>
            <h2>CORE VALUE:</h2>
            <p>
              Upholding the truth and promoting the rule of law and justice
              through credible legal advice and representation.
            </p>
          </div>
          <div>
            <h2>OUR MOTTO:</h2>
            <p>The Rights that you have over others - Forget them,</p>
            <p> The Rights that others have over you - Remember them.</p>
          </div>
          <div>
            <h2>OUR MISSION:</h2>
            <p>
              We always strive to provide outstanding client and community
              service, and are committed to client satisfaction,
            </p>
            <p>
              public growth and development, as we consider their satisfaction
              to be the best measure of our success.
            </p>
          </div>
          <div>
            <h2>OUR VISION:</h2>
            <p>
              At Kanu G. Agabi and Associates, we endeavour to be our Clients'
              Trusted Advisors. When it comes to honesty and
            </p>
            <p>
              timely legal counsel in the ever-changing legal world, we strive
              to remain the first port of call for all and sundry.
            </p>
          </div>
        </section> */}

				<section className="home__intro">
					<div className="home__intro-box">
						<h2 className="home__intro-heading">CORE VALUE</h2>
						<p className="home__intro-text">
							Upholding the truth and promoting the rule of law
							and justice through credible legal advice and
							representation.
						</p>
					</div>
					<div className="home__intro-container">
						<div className="home__intro-box2">
							<h3 className="home__intro-box2-heading">
								OUR MOTTO
							</h3>
							<p className="home__intro-box2-text">
								The Rights that you have over others- Forget
								them,
							</p>
							<p className="home__intro-box2-text">
								The Rights that others have over you - Remember
								them.
							</p>
						</div>
						<div className="home__intro-box2">
							<h3 className="home__intro-box2-heading">
								OUR MISSON
							</h3>
							<p className="home__intro-box2-text">
								We always strive to provide outstanding client
								and community service, and are committed to
								client satisfaction, public growth and
								development, as we consider their satisfaction
								to be the best measure of our success.
							</p>
						</div>
						<div className="home__intro-box2">
							<h3 className="home__intro-box2-heading">
								OUR VISION
							</h3>
							<p className="home__intro-box2-text">
								At Kanu G. Agabi and Associates, we endeavour to
								be our Clients' Trusted Advisors. When it comes
								to honesty and timely legal counsel in the
								ever-changing legal world, we strive to remain
								the first port of call for all and sundry.
							</p>
						</div>
					</div>
				</section>

				{/* <section className="about__exp">
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
        </section> */}
				<Footer />
			</main>
		</Layout>
	);
};

export default About;
