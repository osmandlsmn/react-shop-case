import React from "react";
import { useAppSelector } from "@/utils/hooks";
import Loading from "@/components/Loading";
import productsStyle from "./Products.module.scss";
import ProductCard from "../ProductCard";
import { Product } from "@/types";

const Products = () => {
  const { isLoading, filteredProducts } = useAppSelector((state) => state.products);

  return (
    <div className={productsStyle.container}>
      {isLoading ? (
        <div className={productsStyle.loading}>
          <Loading />
        </div>
      ) : (
        <>
          {filteredProducts?.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
