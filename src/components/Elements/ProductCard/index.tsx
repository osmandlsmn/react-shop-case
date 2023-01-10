import Icon from "@/components/Icon";
import { Product } from "@/types";
import React from "react";
import cardStyle from "./Card.module.scss";

const ProductCard: React.FC<Product> = ({ title, thumbnail, brand, price }) => {
  return (
    <div className={cardStyle.card}>
      <img className={cardStyle.card_image} src={thumbnail} alt={title} />
      <div className={cardStyle.card_content}>
        <h5 className={cardStyle.card_title}>
          <span className={cardStyle.brand}>{brand}</span> {title}
        </h5>
        <div className={cardStyle.card_footer}>
          <p className={cardStyle.card_price}>{price} TL</p>
          <div className={cardStyle.actions}>
            <Icon icon="shopping-basket" color="#CCCCCC" size={24} />
            <Icon icon="favorite-border" color="#CCCCCC" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
