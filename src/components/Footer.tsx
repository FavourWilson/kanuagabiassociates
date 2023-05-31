// @ts-ignore
import footerimg from "./../assets/images/footerimg.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__box1">
          <h2>&nbsp;</h2>
          <img src={footerimg} alt="company logo" />
        </div>
        <div className="footer__help">
          {/* <div className="footer__box2">
            <ul className="footer__link-box">
              <li>
                <a href="/team">Our People</a>
              </li>
              <li>
                <a href="/">Our Firm</a>
              </li>
              <li>
                <a href="/services/about">Our Services</a>
              </li>
            </ul>
            <ul className="footer__link-box">
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/news_and_articles">Insights</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div> */}
          <div className="footer__box2-container1">
            <div className="footer__box2-box">
              <h2>Abuja Office (Head office)</h2>
              <p>TRINITY HOUSE: PLOT 943, CADASTRAL</p>
              <p>ZONE B06,(BEHIND FEDERAL MINISTRY OF</p>
              <p>WORK & HOUSING),</p>
              <p>MABUSHI DISTRICT, ABUJA.</p>
            </div>
            <div className="footer__box2-box">
              <h2>LAGOS: Office </h2>
              <p>44 LASODE CRESCENT, OFF OZUMBA </p>
              <p>MBADIWE,</p>
              <p>BY MOBILE OFFICE,</p>
              <p>VICTORIA ISLAND, LAGOS.</p>
            </div>

            <div className="footer__box2-box">
              <h2>Calabar Office </h2>
              <p>1 EDET EYO CRESCENT,</p>
              <p>OFF NDIDEM USANG ISO ROAD,</p>
              <p>MARIAN ROAD.</p>
            </div>
            <div className="footer__box2-box">
              <h2>Uyo Office </h2>
              <p>NO. 86, ATIKU ABUBAKAR AVENUE, </p>
              <p>UYO, AKWA IBOM STATE.</p>
            </div>
            <h3>Terms of service</h3>
            <h3>Privacy Policy</h3>
          </div>
        </div>
        <div className="footer__box3">
          <ul>
            <li>
              <a href="https://twitter.com/KGA_Law">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kga-law-90700925b">
                Linkedln
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kga_law/">Instagram</a>
            </li>
          </ul>
          <div className="footer__help2">
            <p>Copyright 2022 Kanu Law @ All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
