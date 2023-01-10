import React from "react";
import { useAppSelector } from "@/utils/hooks";
import ProductCard from "@/components/Elements/ProductCard";
import Loading from "@/components/Loading";
import productsStyle from "./Products.module.scss";

const Products = () => {
  const { isLoading, products } = useAppSelector((state) => state.products);

  return (
    <div className={productsStyle.container}>
      {isLoading ? (
        <div className={productsStyle.loading}>
          <Loading />
        </div>
      ) : (
        <>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
