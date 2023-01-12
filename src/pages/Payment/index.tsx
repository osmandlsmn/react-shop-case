import Icon from "@/components/Icon";
import MainLayout, { MainLayoutContent } from "@/components/Layout/MainLayout";
import { ADD_ADDRESS } from "@/store/cart/cartSlice";
import type { Address } from "@/types";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import AddressItem from "./Address";
import Cart from "./Cart";
import paymentStyle from "./Payment.module.scss";
import PaymentForm from "./PaymentForm";

const Payment = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { addresses } = useAppSelector((state) => state.cart);

  const handleSubmit = (values: any, onClose: Function) => {
    dispatch(ADD_ADDRESS(values));
    toast.success(t("notifications.addedAddress"));
    onClose();
  };

  const openAddressModal = () => {
    confirmAlert({
      customUI: ({ onClose }) => <PaymentForm handleSubmit={handleSubmit} onClose={onClose} />,
    });
  };

  return (
    <MainLayout>
      <MainLayoutContent>
        <div className={paymentStyle.container}>
          <div className={paymentStyle.addresses}>
            <div onClick={openAddressModal} className={`${paymentStyle.address} ${paymentStyle.new_adress}`}>
              <div className={paymentStyle.new_adress_content}>
                {t("payment.newAddress")}
                <Icon icon="plus" size={18} />
              </div>
            </div>
            {addresses.map((address: Address) => (
              <AddressItem key={address.name} address={address} />
            ))}
          </div>
          <Cart />
        </div>
      </MainLayoutContent>
    </MainLayout>
  );
};

export default Payment;
