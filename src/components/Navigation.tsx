/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5"; //@ts-ignore
import footer from "../assets/images/footerimg.png";

const Navigation = ({ classhelp }: { classhelp: string | undefined }) => {
  return (
    <nav className={`navmain__container ${classhelp}`}>
      <img src={footer} alt="" className="test__img" />
      <ul className="navmain__container-ul">
        <li className="navmain__container-li">
          <a href="/" className="navmain__container-a">
            home
          </a>
        </li>
        <li className="navmain__container-li">
          <a className="navmain__container-a">the firm </a>
          <ul className="navmain__submenu">
            <li>
              <a href="/services/about">about us</a>
            </li>
            <li>
              <a href="/services/practice_areas">our services</a>
            </li>
          </ul>
        </li>
        <li className="navmain__container-li">
          <a href="/careers" className="navmain__container-a">
            career
          </a>
          <ul className="navmain__submenu">
            <li>
              <a href="/careers">current opportunities</a>
            </li>
            <li>
              <a href="/careers">graduate internship</a>
            </li>
            <li>
              <a href="/careers">student internship</a>
            </li>
          </ul>
        </li>

        <li className="navmain__container-li">
          <a href="/team" className="navmain__container-a">
            our team
          </a>
        </li>
        <li className="navmain__container-li">
          <a className="navmain__container-a">News and Publications</a>
          <ul className="navmain__submenu">
            <li>
              <a href="/news_and_articles"> Articles </a>
            </li>
            <li>
              <a href="/news_and_articles"> News</a>
            </li>
            <li>
              <a href="/news_and_articles">Events</a>
            </li>
          </ul>
        </li>
        <li className="navmain__container-li">
          <a className="navmain__container-a">office locations</a>
          <ul className="navmain__submenu">
            <li>
              <a href="/locations/abuja">abuja</a>
            </li>
            <li>
              <a href="/locations/lagos">lagos</a>
            </li>
            <li>
              <a href="/locations/calabar">calabar</a>
            </li>
            <li>
              <a href="/locations/uyo">uyo</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="navmain__details">
        <div className="navmain__links">
          <a href="https://twitter.com/KGA_Law" className="mb-10">
            <IoLogoTwitter className="navmain__icon" />
          </a>
          <a href="https://www.instagram.com/kga_law/" className="mb-10">
            <IoLogoInstagram className="navmain__icon" />
          </a>
          <a href="https://www.linkedin.com/in/kga-law-90700925b">
            <IoLogoLinkedin className="navmain__icon" />
          </a>
        </div>
        <h2>KANU G. AGABI AND ASSOCIATES</h2>
        {/* <p>Lagos phone: +234 039920287</p>
        <p>Email: office@knfossdv.com</p>
        <p>Fax: 903-93904848-44</p> */}
      </div>
      <div className="navmain__contact">
        <a href="/contact">contact us</a>
      </div>
    </nav>
  );
};

export default Navigation;
