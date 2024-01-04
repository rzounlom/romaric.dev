import { FC } from "react";
import HeaderContent from "../header-content/HeaderContent";
import Navbar from "../navbar/Navbar";

const Header: FC = () => {
  return (
    <header>
      <Navbar />
      <HeaderContent />
    </header>
  );
};

export default Header;
