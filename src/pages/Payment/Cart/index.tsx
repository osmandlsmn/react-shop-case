import React from "react";
import Button from "@/components/Elements/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/utils/hooks";
import { BasketProduct } from "@/types";
import { useTranslation } from "react-i18next";
import paymentStyle from "../Payment.module.scss";

const Cart = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { products } = useAppSelector((state) => state.cart);

  const totalCartAmount = products.reduce((acc: number, product: BasketProduct) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleCheckout = () => {
    navigate("/payment");
  };

  const continueShopping = () => {
    navigate("/");
  };

  return (
    <div className={paymentStyle.cart_container}>
      <div className={paymentStyle.cart}>
        <h3 className={paymentStyle.cart_title}>{t("payment.amountPayable")}</h3>
        <div className={paymentStyle.total_amount}>{totalCartAmount} TL</div>
        <div className={paymentStyle.cart_actions}>
          <Button onClick={handleCheckout}>{t("payment.cartConfirm")}</Button>
        </div>
        <div className={paymentStyle.cart_info}>
          <ul className={paymentStyle.cart_info_list}>
            <li>
              <span>{t("basket.deliveryPrice")}</span>
              <span className={paymentStyle.info_value}>0.00 TL</span>
            </li>
            <li>
              <span>{t("basket.totalProduct")}</span>
              <span className={paymentStyle.info_value}>{totalCartAmount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
