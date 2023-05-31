import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { CTX } from "../contexts/GlobalContext";

const NavButton = ({
  text,
  icon,
  classhelp,
  classhelp2,
}: {
  text: string;
  icon: string;
  classhelp?: string | undefined;
  classhelp2?: string | undefined;
}) => {
  const { handleNavIsShown } = CTX();
  return (
    <div className={`nav__btn ${classhelp2}`}>
      <div className={`nav__btn-box ${classhelp}`} onClick={handleNavIsShown}>
        <p className="nav__text">{text}</p>
        {icon === "open" && <HiChevronDown className={`nav__btn-icon`} />}
        {icon === "close" && <HiChevronUp className={`nav__btn-icon`} />}
      </div>
    </div>
  );
};

export default NavButton;
