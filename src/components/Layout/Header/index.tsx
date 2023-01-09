import React, { useState } from "react";
import headerStyle from "./Header.module.scss";
import Navbar from "./Navbar";
import Icon from "@/components/Icon";
import ChangeTheme from "./ChangeTheme";
import ChooseLanguage from "./ChooseLanguage";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${headerStyle.header} container`}>
      <div className={headerStyle.logo}>COINO</div>
      <div className={`${headerStyle.menu} ${isOpen ? headerStyle.menu_active : ""}`}>
        <Navbar isOpen={isOpen} />
        <div className={headerStyle.actions}>
          <ChooseLanguage />
          <ChangeTheme />
        </div>
      </div>
      <Icon className={headerStyle.hamburger} onClick={() => setIsOpen(!isOpen)} icon={isOpen ? "close" : "menu"} size={30} />
    </div>
  );
};

export default Header;
