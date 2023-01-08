import React from "react";
import Icon from "@/components/Icon";

const ChangeTheme = () => {
  const updateTheme = () => {
    // Body add data theme dark
    const body = document.querySelector("body");
    if (body?.attributes.getNamedItem("data-theme")?.value === "dark") {
      body.removeAttribute("data-theme");
    } else {
      body?.setAttribute("data-theme", "dark");
    }
  };

  return <Icon onClick={updateTheme} icon="dark-mode" size={24} />;
};

export default ChangeTheme;
