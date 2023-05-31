import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { HiArrowLongRight } from "react-icons/hi2";
import Footer from "../components/Footer";
import { AbujaText, CalabarText, UyoText } from "../components/Text";

const Locations = () => {
  const { name } = useParams();
  const [location, setLocation] = useState<string>("");
  const [text, setText] = useState<React.ReactNode>("");
  const [address, setAddress] = useState<string>("");
  const [style, setStyle] = useState<string>("second");
  useEffect(() => {
    switch (name) {
      case "lagos":
        setLocation("Lagos");
        setStyle("locations__bg2");
        setText(`At Lagos, we are inspired to proffer solution to vital and
        contemporary legal issues affecting our clients in tandem
        with our firm’s core values.
        The commerce driven peculiarity of Lagos affords our team
        an opportunities to proffer excellent solutions to issues
        affecting our clients whether by commercial arbitration,
        negotiations or seeking of redress at across all levels of our
        Judicature.`);
        setAddress(
          "44 LASODE CRESCENT, OFF OZUMBA MBADIWE, BY MOBILE OFFICE, VICTORIA ISLAND, LAGOS. "
        );
        break;
      case "uyo":
        setLocation("Uyo");
        setStyle("locations__bg");
        setText(UyoText);
        setAddress("NO. 86, ATIKU ABUBAKAR AVENUE, UYO, AKWA IBOM STATE. ");

        break;
      case "calabar":
        setLocation("Calabar");
        setStyle("locations__bg3");
        setText(CalabarText);
        setAddress(
          "1 EDET EYO CRESCENT,OFF NDIDEM USANG ISO ROAD, MARIAN ROAD. "
        );

        break;
      case "abuja":
        setLocation("Abuja");
        setStyle("locations__bg1");
        setText(AbujaText);
        setAddress(
          " TRINITY HOUSE: PLOT 943, CADASTRAL ZONE B06, (BEHIND FEDERAL MINISTRY OF WORK & HOUSING),MABUSHI DISTRICT, ABUJA. "
        );
        break;
    }
  }, [name, location]);

  return (
    <Layout>
      <main>
        <section className={`team__header ${style}`}>
          <div className="team__header--box locations__top-help">
            <h1 className="heading__main">{location}</h1>
            {/* <p className="locations__text">
              <HiArrowLongRight className="locations__icon--white" />
              related professionals
            </p> */}
          </div>
        </section>
        <section className="locations__intro">
          <h2 className="intro__text">{text}</h2>
          <div className="locations__info">
            <h4 className="locations__info--header">Office Information</h4>
            <div className="locations__info-box">
              <p className="locations__info-text">Address</p>
              <p className="locations__info-text">
                <HiArrowLongRight className="locations__icon--dark" />
                {address}
              </p>
              <p className="locations__info-text">
                <HiArrowLongRight className="locations__icon--dark" />
                Map
              </p>
            </div>
            {/* <div className="locations__info-box">
              <p className="locations__info-text">Phone</p>
              <p className="locations__info-text">
                <HiArrowLongRight className="locations__icon--dark" />
                +234 09242 284024
              </p>
              <p className="locations__info-text">
                <HiArrowLongRight className="locations__icon--dark" />
                +234 09242 284024
              </p>
            </div> */}
            <div className="locations__info-box locations__info-texthelp">
              <p className="locations__info-text">Mail</p>
              <p className="locations__info-text ">
                <HiArrowLongRight className="locations__icon--dark" />
                kgahq@kanuagabilegal.com
              </p>
              <p className="locations__info-text ">
                <HiArrowLongRight className="locations__icon--dark" />
                kgahq@kanuagabilegal.com
              </p>
            </div>
          </div>
        </section>
        {/* <section className="locations__intro">
          <h2 className="intro__text locations__texthelp">Focus Area</h2>
          <div className="locations__details">
            <p className="locations__details-heading">name</p>
            <p className="locations__details-heading">open</p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">
              Alternative Dispute Resolution
            </p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Banking Law</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Commercial Law</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Communications Law</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Company Law</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Constituitional Law</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Corporate Law</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Criminal Law</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Debt Recovery</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Deed And Conveyance</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">
              Election Law and Election Petition
            </p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">Entertainment Law</p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
        </section> */}
        {/* <section className="locations__intro ">
          <h2 className="intro__text locations__texthelp">Community</h2>
          <h3 className="locations__text-details">
            Our {location} office supports a variety of community organizations
            and events, including the Jewish Community Center and the Northeast
            Legal Services.
          </h3>
          <div className="locations__details locations__info-texthelp1">
            <p className="locations__details-text">
              Publications and Apperances
            </p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
          <div className="locations__details">
            <p className="locations__details-text">
              Memberships and Associations
            </p>
            <p className="locations__details-heading">
              <HiArrowLongRight className="locations__icon--hash" />
            </p>
          </div>
        </section> */}
        <Footer />
      </main>
    </Layout>
  );
};

export default Locations;
