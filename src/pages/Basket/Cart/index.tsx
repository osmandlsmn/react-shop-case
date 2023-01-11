import React from "react";
import Button from "@/components/Elements/Button";
import basketStyle from "../Basket.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/utils/hooks";
import { BasketProduct } from "@/types";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { products } = useAppSelector((state) => state.cart);

  const totalCartAmount = products.reduce((acc: number, product: BasketProduct) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleCheckout = () => {};

  const continueShopping = () => {
    navigate("/");
  };

  return (
    <div className={basketStyle.cart_container}>
      <div className={basketStyle.cart}>
        <h3 className={basketStyle.cart_title}>{t("basket.orderSummary")}</h3>
        <div className={basketStyle.cart_info}>
          <ul className={basketStyle.cart_info_list}>
            <li>
              <span>{t("basket.totalProduct")}</span>
              <span className={basketStyle.info_value}>{products.length}</span>
            </li>
            <li>
              <span>{t("basket.deliveryPrice")}</span>
              <span className={basketStyle.info_value}>0.00 TL</span>
            </li>
            <li>
              <span>{t("basket.totalProduct")}</span>
              <span className={basketStyle.total_price}>{totalCartAmount} TL</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={basketStyle.cart_actions}>
        <Button>{t("basket.checkout")}</Button>
        <Button onClick={continueShopping} variant="outline">
          {t("basket.continueShopping")}
        </Button>
      </div>
    </div>
  );
};

export default Cart;
