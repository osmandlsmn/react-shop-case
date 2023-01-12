import React from "react";
import { useAppSelector } from "@/utils/hooks";
import basketStyle from "../Basket.module.scss";
import { BasketProduct } from "@/types";
import ProductItem from "./ProductItem";
import EmptyItem from "@/components/Elements/EmptyItem";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const { products } = useAppSelector((state) => state.cart);

  return (
    <div className={basketStyle.products}>
      {products.length > 0 ? (
        <>
          {products?.map((product: BasketProduct) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </>
      ) : (
        <EmptyItem>{t("basket.empty")}</EmptyItem>
      )}
    </div>
  );
};

export default Products;
