import Icon from "@/components/Icon";
import { ADD_TO_CART } from "@/store/basket/basketSlice";
import { Product } from "@/types";
import { useAppDispatch } from "@/utils/hooks";
import React from "react";
import cardStyle from "./Card.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import StarRating from "@/components/Elements/StarRating";

const ProductCard: React.FC<Product> = (product) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleAddToCart = () => {
    dispatch(ADD_TO_CART(product));
    toast.success(t("notifications.addedToBasket"));
  };

  return (
    <div className={cardStyle.card}>
      <img className={cardStyle.card_image} src={product.thumbnail} alt={product.title} />
      <div className={cardStyle.card_content}>
        <h5 className={cardStyle.card_title}>
          <span className={cardStyle.brand}>{product.brand}</span> {product.title}
        </h5>
        <StarRating rating={Number(product.rating.toFixed())} />
        <div className={cardStyle.card_footer}>
          <p className={cardStyle.card_price}>{product.price} TL</p>
          <div className={cardStyle.actions}>
            <Icon onClick={handleAddToCart} icon="shopping-basket" color="#CCCCCC" size={24} />
            <Icon icon="favorite-border" color="#CCCCCC" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
