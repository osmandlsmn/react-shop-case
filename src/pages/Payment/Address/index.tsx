import React from "react";
import { REMOVE_ADDRESS, SELECT_ADDRESS } from "@/store/cart/cartSlice";
import type { Address } from "@/types/index";
import { toast } from "react-hot-toast";
import paymentStyle from "../Payment.module.scss";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import Icon from "@/components/Icon";

interface Props {
  address: Address;
}

const AddressItem: React.FC<Props> = ({ address }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { selectedAdress } = useAppSelector((state) => state.cart);

  const deleteAddress = () => {
    dispatch(REMOVE_ADDRESS(address));
    toast.success(t("notifications.removedAddress"));
  };

  const selectAddress = () => {
    dispatch(SELECT_ADDRESS(address));
    toast.success(t("notifications.selectedAddress"));
  };

  return (
    <div onClick={selectAddress} className={`${paymentStyle.address} ${selectedAdress.id === address.id ? paymentStyle.seleceted_address : ""}`}>
      <Icon onClick={deleteAddress} className={paymentStyle.address_delete_button} icon="delete" size={24} />
      <div className={paymentStyle.address_content}>
        <div className={paymentStyle.adress_header}>
          <p className={paymentStyle.address_title}>{address.name}</p>
        </div>
        <div className={paymentStyle.address_content_item}>
          {t("payment.addressCity")}: {address.city}
        </div>
        <div className={paymentStyle.address_content_item}>
          {t("payment.addressDistrict")}: {address.district}
        </div>
        <div className={paymentStyle.address_content_item}>
          {t("payment.addressDoorNumber")}: {address.doorNo}
        </div>
        <div className={paymentStyle.address_content_item}>
          {t("payment.address")}: {address.address}
        </div>
      </div>
    </div>
  );
};

export default AddressItem;
