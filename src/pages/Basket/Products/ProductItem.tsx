import React from "react";
import Icon from "@/components/Icon";
import { QUANİTY_CHANGE, REMOVE_FROM_CART } from "@/store/cart/cartSlice";
import type { BasketProduct } from "@/types";
import { useAppDispatch } from "@/utils/hooks";
import basketStyle from "../Basket.module.scss";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

interface Props {
  product: BasketProduct;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();
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
    dispatch(REMOVE_FROM_CART(product));
    toast.success(t("notifications.removedFromBasket"));
  };

  return (
    <tr key={product.id} className={basketStyle.product}>
      <td className={basketStyle.product}>
        <div className={basketStyle.product_info_area}>
          <img className={basketStyle.product_image} src={product.thumbnail} alt={product.title} />
          <div className={basketStyle.product_info}>
            <p className={basketStyle.product_brand}>{product.brand}</p>
            <h5 className={basketStyle.product_title}>{product.title}</h5>
          </div>
        </div>
      </td>
      <td>
        <div className={basketStyle.quantity}>
          <button onClick={decreaseQuantity} className={basketStyle.quantity_button}>
            <Icon icon="minus" size={18} />
          </button>
          <input className={basketStyle.quantity_input} value={product.quantity} />
          <button onClick={increaseQuantity} className={basketStyle.quantity_button}>
            <Icon icon="plus" size={18} />
          </button>
        </div>
      </td>
      <td className={basketStyle.product_price}>
        <div>{product.price} TL</div>
        <div className={basketStyle.total_price}>{product.price * product.quantity} TL</div>
      </td>
      <td>
        <button className={basketStyle.delete_button}>
          <Icon onClick={handleRemoveProduct} icon="delete-outline" size={24} />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
