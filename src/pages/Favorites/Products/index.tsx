import React from "react";
import { useAppSelector } from "@/utils/hooks";
import favoriteStyle from "../Favorite.module.scss";
import { BasketProduct } from "@/types";
import ProductItem from "./ProductItem";
import EmptyItem from "@/components/Elements/EmptyItem";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const { products } = useAppSelector((state) => state.favorite);

  return (
    <div className={favoriteStyle.products}>
      {products.length > 0 ? (
        products.map((product: BasketProduct) => <ProductItem key={product.id} product={product} />)
      ) : (
        <EmptyItem>{t("favorite.empty")}</EmptyItem>
      )}
    </div>
  );
};

export default Products;
