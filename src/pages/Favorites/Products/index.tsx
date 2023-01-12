import React from "react";
import { useAppSelector } from "@/utils/hooks";
import favoriteStyle from "../Favorite.module.scss";
import { BasketProduct } from "@/types";
import ProductItem from "./ProductItem";

const Products = () => {
  const { products } = useAppSelector((state) => state.favorite);

  return (
    <div className={favoriteStyle.products}>
      {products?.map((product: BasketProduct) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
