import React from "react";
import { NavLink } from "react-router-dom";
import headerStyle from "./Header.module.scss";
import { useTranslation } from "react-i18next";

const Navbar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const { t } = useTranslation();

  const navigations = [
    {
      name: t("header.navigations.home"),
      link: "/",
    },
    {
      name: t("header.navigations.basket"),
      link: "/",
    },
    {
      name: t("header.navigations.favorites"),
      link: "/",
    },
  ];

  return (
    <nav
      className={`${headerStyle.nav} ${isOpen ? headerStyle.nav_active : ""}`}
    >
      {navigations.map((nav, index) => (
        <div key={index} className={headerStyle.nav_item}>
          <NavLink to={nav.link}>{nav.name}</NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
