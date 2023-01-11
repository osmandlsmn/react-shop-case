import React from "react";
import { useAppSelector } from "@/utils/hooks";
import basketStyle from "../Basket.module.scss";
import { BasketProduct } from "@/types";
import ProductItem from "./ProductItem";

const Products = () => {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <table className={basketStyle.table}>
      <tbody>
        {products?.map((product: BasketProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default Products;
