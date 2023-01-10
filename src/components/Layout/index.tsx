import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
