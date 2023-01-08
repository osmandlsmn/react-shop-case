import * as React from "react";
import layoutStyle from "./Layout.module.scss";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={layoutStyle.layout}>{children}</div>;
};

export const MainLayoutTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => <h1 className={layoutStyle.header_title}>{children}</h1>;

export default MainLayout;
