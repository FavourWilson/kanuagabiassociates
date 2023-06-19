import { useContext, createContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const context = createContext<any>(null);

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [navIsShown, setNavIsShown] = useState<boolean>(false);
  const [lawyerToEdit, setLawyerToEdit] = useState<any>("");
  const userAuth = Cookies.get("user_auth_token")
    ? `Bearer ${JSON.parse(Cookies.get("user_auth_token")!)}`
    : false;
  const navigate = useNavigate();
  const handleNavIsShown = () => {
    setNavIsShown((prev) => !prev);
  };

  const handleLawyerToEdit = (lawyer: any) => {
    setLawyerToEdit(lawyer);
  };
  const logout = (e: any) => {
    e.preventDefault();
    Cookies.remove("user_auth_token");
    navigate("/");
  };
  return (
    <context.Provider
      value={{
        navIsShown,
        handleNavIsShown,
        userAuth,
        logout,
        lawyerToEdit,
        articleToEdit
        handleLawyerToEdit,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const CTX = () => useContext(context);
export default GlobalContext;
