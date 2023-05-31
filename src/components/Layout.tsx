import React, { Fragment } from "react";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";
import NavButton from "../components/NavButton";
import Navigation from "../components/Navigation";
import { CTX } from "../contexts/GlobalContext";

const Layout = ({
  children,
  classhelp,
  classhelp2,
}: {
  children: React.ReactNode;
  classhelp?: string | undefined;
  classhelp2?: string | undefined;
}) => {
  const { navIsShown, handleNavIsShown } = CTX();

  return (
    <Fragment>
      <header>
        <div className="nav__icon-box" onClick={handleNavIsShown}>
          <IoReorderThreeOutline className={`nav__icon ${classhelp}`} />
        </div>
        <NavButton
          text="menu"
          icon="open"
          classhelp={classhelp}
          classhelp2={classhelp2}
        />
        <div className={`${navIsShown ? "navmain" : "navmain__alt"}`}>
          <div className="nav__icon-box" onClick={handleNavIsShown}>
            <IoClose className="nav__icon" />
          </div>
          <NavButton text="close" icon="close" />
          <Navigation classhelp={classhelp} />
        </div>
      </header>
      <div>{children}</div>
    </Fragment>
  );
};

export default Layout;
