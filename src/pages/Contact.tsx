import Layout from "../components/Layout";
import { HiArrowLongRight } from "react-icons/hi2";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Layout>
      <main>
        <section className="team__header contact__bg">
          <div className="team__header--box locations__top-help">
            <h1 className="heading__main">contact us</h1>
          </div>
        </section>
        <section className="careers__intro">
          <h2 className="careers__intro-text">
            We are pleased to connect with you <b>in‑person</b>, by <b>phone</b>
            , by
            <b>email</b> or <b>24/7</b> on our website. We look forward to
            learning how we can help you.
          </h2>
        </section>
        <section className="careers__intro contact__main">
          <h2 className="contact__main-heading">Where to find us</h2>
          <div className="contact__main-container">
            <div className="contact__main-box">
              <div className="contact__main-cont">
                <h4>ABUJA (HEAD OFFICE):</h4>
                <p>TRINITY HOUSE: PLOT 943, CADASTRAL ZONE B06,</p>
                <p>(BEHIND FEDERAL MINISTRY OF WORK & HOUSING),</p>
                <p> MABUSHI DISTRICT, ABUJA. </p>
                <p> Nigeria </p>
              </div>
              <div className="contact__main-cont">
                <h4>lagos office</h4>
                <p>44 LASODE CRESCENT, OFF OZUMBA MBADIWE,</p>
                <p>BY MOBILE OFFICE, </p>
                <p> VICTORIA ISLAND, LAGOS.</p>
                <p> Nigeria </p>
              </div>
              <div className="contact__main-cont">
                <h4>calabar office</h4>
                <p>1 EDET EYO CRESCENT,</p>
                <p>OFF NDIDEM USANG ISO ROAD, </p>
                <p> MARIAN ROAD. </p>
                <p> Nigeria </p>
              </div>
              <div className="contact__main-cont">
                <h4>uyo office</h4>
                <p>NO. 86, ATIKU ABUBAKAR AVENUE, </p>
                <p>UYO, AKWA IBOM STATE.</p>
                <p> Nigeria </p>
              </div>
            </div>
            <form className="contact__form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <textarea placeholder="Your Message..." />
              <p className="contact__form-text">
                This contact form is protected by reCAPTCHA and the Google
                Privacy Policy and Terms of Service apply.
              </p>
              <button type="submit" className="contact__form-btn">
                submit
              </button>
            </form>
          </div>
        </section>
        <section className="careers__intro contact__main">
          <h2 className="contact__main-heading">Contact Us</h2>
          <div>
            <a href="https://twitter.com/KGA_Law" className="contact__icon">
              <HiArrowLongRight className="contact__icon-main" />
              twitter
            </a>
            <a
              href="https://www.linkedin.com/in/kga-law-90700925b"
              className="contact__icon"
            >
              <HiArrowLongRight className="contact__icon-main" />
              linkedin
            </a>
            <a
              href="https://www.instagram.com/kga_law/"
              className="contact__icon"
            >
              <HiArrowLongRight className="contact__icon-main" />
              instagram
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </Layout>
  );
};

export default Contact;
