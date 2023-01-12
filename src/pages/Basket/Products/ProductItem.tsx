import ConfirmDialog from "@/components/Elements/ConfirmDialog";
import Icon from "@/components/Icon";
import { QUANİTY_CHANGE, REMOVE_FROM_CART } from "@/store/cart/cartSlice";
import { ADD_TO_FAVORITE } from "@/store/favorite/favoriteSlice";
import type { BasketProduct, DialogButton, Product } from "@/types";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import basketStyle from "../Basket.module.scss";

interface Props {
  product: BasketProduct;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();
  const { products: favoriteProducts } = useAppSelector((state) => state.favorite);
  const dispatch = useAppDispatch();

  const increaseQuantity = () => {
    dispatch(QUANİTY_CHANGE({ product, quantity: +1 }));
    toast.success(t("notifications.increasedQuantity"));
  };

  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      dispatch(QUANİTY_CHANGE({ product, quantity: -1 }));
      toast.success(t("notifications.decreasedQuantity"));
    }
  };

  const handleRemoveProduct = () => {
    const hasFavorite = favoriteProducts.find((item: Product) => item.id === product.id);

    const dialogButtons: DialogButton[] = [
      {
        label: t("basket.removeFromBasket"),
        variant: "outline",
        onClick: (handleClose) => {
          dispatch(REMOVE_FROM_CART(product));
          toast.success(t("notifications.removedFromBasket"));
          handleClose();
        },
      },
    ];

    if (!hasFavorite) {
      dialogButtons.push({
        label: t("basket.removeFromBasketAndFavorites"),
        variant: "primary",
        onClick: (handleClose) => {
          dispatch(REMOVE_FROM_CART(product));
          dispatch(ADD_TO_FAVORITE(product));
          toast.success(t("notifications.removeFromBasketAndFavorites"));
          handleClose();
        },
      });
    }

    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmDialog
          onClose={onClose}
          title={t("dialog.removeFromBasket.title")}
          message={t("dialog.removeFromBasket.message")}
          buttons={dialogButtons}
        />
      ),
    });
  };

  return (
    <div className={basketStyle.product}>
      <div className={basketStyle.product_info_area}>
        <img className={basketStyle.product_image} src={product.thumbnail} alt={product.title} />
        <div className={basketStyle.product_info}>
          <p className={basketStyle.product_brand}>{product.brand}</p>
          <h5 className={basketStyle.product_title}>{product.title}</h5>
        </div>
      </div>
      <div className={basketStyle.quantity}>
        <button onClick={decreaseQuantity} className={basketStyle.quantity_button}>
          <Icon icon="minus" size={18} />
        </button>
        <input className={basketStyle.quantity_input} value={product.quantity} />
        <button onClick={increaseQuantity} className={basketStyle.quantity_button}>
          <Icon icon="plus" size={18} />
        </button>
      </div>
      <div className={basketStyle.product_price}>
        <span>{product.price} TL</span>
        <span className={basketStyle.total_price}>{product.price * product.quantity} TL</span>
      </div>
      <button onClick={handleRemoveProduct} className={basketStyle.delete_button}>
        <Icon icon="delete-outline" size={24} />
      </button>
    </div>
  );
};

export default ProductItem;
