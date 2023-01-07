import React from "react";
import { NavLink } from "react-router-dom";
import headerStyle from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.logo}>COINO</div>
      <nav className={headerStyle.nav}>
        <ul>
          <li>
            <NavLink to="/" className={headerStyle.nav_item}>
              Ana Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={headerStyle.nav_item}>
              Sepet
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={headerStyle.nav_item}>
              Favoriler
            </NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

export default Header;
