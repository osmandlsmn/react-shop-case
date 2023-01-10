import React, { useEffect } from "react";
import Sidebar from "@/components/Layout/Sidebar";
import MainLayout, { MainLayoutContent, MainLayoutTitle } from "@/components/Layout/MainLayout";
import { getProducts } from "@/store/products/productsThunk";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/utils/hooks";
import Products from "@/components/Products";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <MainLayout>
      <MainLayoutTitle>{t("sidebar.header_title")}</MainLayoutTitle>
      <MainLayoutContent>
        <Sidebar />
        <Products />
      </MainLayoutContent>
    </MainLayout>
  );
};

export default Home;
