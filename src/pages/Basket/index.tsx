import React from "react";
import MainLayout, { MainLayoutContent, MainLayoutTitle } from "@/components/Layout/MainLayout";
import { useTranslation } from "react-i18next";
import basketStyle from "./Basket.module.scss";
import Products from "./Products";
import Cart from "./Cart";

const Basket: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <MainLayoutTitle>{t("basket.headerTitle")}</MainLayoutTitle>
      <MainLayoutContent>
        <div className={basketStyle.container}>
          <Products />
          <Cart />
        </div>
      </MainLayoutContent>
    </MainLayout>
  );
};

export default Basket;
