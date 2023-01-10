import React from "react";
import MainLayout, { MainLayoutContent, MainLayoutTitle } from "@/components/Layout/MainLayout";
import { useTranslation } from "react-i18next";

const Basket: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <MainLayoutTitle>{t("basket.header_title")}</MainLayoutTitle>
      <MainLayoutContent>Basket</MainLayoutContent>
    </MainLayout>
  );
};

export default Basket;
