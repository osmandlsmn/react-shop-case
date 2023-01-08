import React, { useState } from "react";
import headerStyle from "./Header.module.scss";
import Navbar from "./Navbar";
import Dropdown from "@/components/Form/Dropdown";
import Icon from "@/components/Icon";
import { Option } from "@/types";
import { useTranslation } from "react-i18next";
import ChangeTheme from "./ChangeTheme";

const languages = [
  {
    value: "tr",
    label: "Turkish",
  },
  {
    value: "en",
    label: "English",
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Option>(languages[0]);
  const { t, i18n } = useTranslation();

  const updateLanguage = (selected: Option) => {
    i18n.changeLanguage(selected.value);
    setLanguage(selected);
  };

  return (
    <div className={`${headerStyle.header}`}>
      <div className={headerStyle.logo}>COINO</div>
      <div
        className={`${headerStyle.menu} ${
          isOpen ? headerStyle.menu_active : ""
        }`}
      >
        <Navbar isOpen={isOpen} />
        <div className={headerStyle.actions}>
          <Dropdown
            selected={language}
            onChange={updateLanguage}
            options={languages}
          />
          <ChangeTheme />
        </div>
      </div>
      <Icon
        className={headerStyle.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        icon={isOpen ? "close" : "menu"}
        size={30}
      />
    </div>
  );
};

export default Header;
