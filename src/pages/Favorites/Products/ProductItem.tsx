import React from "react";
import Icon from "@/components/Icon";
import type { BasketProduct, Product } from "@/types";
import { useAppDispatch } from "@/utils/hooks";
import favoriteStyle from "../Favorite.module.scss";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { REMOVE_FROM_FAVORITE } from "@/store/favorite/favoriteSlice";
import Button from "@/components/Elements/Button";
import { ADD_TO_CART } from "@/store/cart/cartSlice";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleRemoveFavorite = () => {
    dispatch(REMOVE_FROM_FAVORITE(product));
    toast.success(t("notifications.removedFromFavorite"));
  };

  const handleAddToBasket = () => {
    dispatch(ADD_TO_CART(product));
    toast.success(t("notifications.addedToBasket"));
  };

  return (
    <div className={favoriteStyle.product}>
      <div className={favoriteStyle.product_info_area}>
        <img className={favoriteStyle.product_image} src={product.thumbnail} alt={product.title} />
        <div className={favoriteStyle.product_info}>
          <p className={favoriteStyle.product_brand}>{product.brand}</p>
          <h5 className={favoriteStyle.product_title}>{product.title}</h5>
        </div>
      </div>
      <div className={favoriteStyle.product_price}>
        <span>{product.price} TL</span>
      </div>
      <div className={favoriteStyle.actions}>
        <Button onClick={handleAddToBasket}>{t("favorite.addToBasket")}</Button>
        <button onClick={handleRemoveFavorite} className={favoriteStyle.delete_button}>
          <Icon icon="delete-outline" size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
