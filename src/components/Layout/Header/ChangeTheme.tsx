import { useState } from "react";
import Icon from "@/components/Icon";
import headerStyle from "./Header.module.scss";

const ChangeTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const updateTheme = () => {
    // Body add data theme dark
    const body = document.querySelector("body");

    if (body?.attributes.getNamedItem("data-theme")?.value === "dark") {
      setTheme("light");
      body.removeAttribute("data-theme");
    } else {
      setTheme("dark");
      body?.setAttribute("data-theme", "dark");
    }
  };

  return <Icon className={headerStyle.header_icon} onClick={updateTheme} icon={theme === "dark" ? "light-mode" : "dark-mode"} size={24} />;
};

export default ChangeTheme;
