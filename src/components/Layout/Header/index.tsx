import React, { useState } from "react";
import headerStyle from "./Header.module.scss";
import Navbar from "./Navbar";
import Dropdown from "@/components/Forms/Dropdown";

const Header: React.FC = () => {
  const [language, setLanguage] = useState("Turkish");

  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.logo}>COINO</div>
      <Navbar />
      <div>
        <Dropdown
          selected={language}
          onChange={setLanguage}
          options={["Turkish", "English"]}
        />
      </div>
    </div>
  );
};

export default Header;
