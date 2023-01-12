import React from "react";
import MainLayout, { MainLayoutContent, MainLayoutTitle } from "@/components/Layout/MainLayout";
import { useTranslation } from "react-i18next";
import favoriteStyle from "./Favorite.module.scss";
import Products from "./Products";

const Basket: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <MainLayoutTitle>{t("favorite.headerTitle")}</MainLayoutTitle>
      <MainLayoutContent>
        <div className={favoriteStyle.container}>
          <Products />
        </div>
      </MainLayoutContent>
    </MainLayout>
  );
};

export default Basket;
