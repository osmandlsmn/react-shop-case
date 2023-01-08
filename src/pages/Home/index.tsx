import React from "react";

import Sidebar from "@/components/Sidebar";
import MainLayout, { MainLayoutTitle } from "@/layouts/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <MainLayoutTitle>Ürünler</MainLayoutTitle>
      <Sidebar />
    </MainLayout>
  );
};

export default Home;
