import React from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { paymentSchema } from "@/utils/schemas";
import Input from "@/components/Form/Input";
import Button from "@/components/Elements/Button";
import paymentStyle from "../Payment.module.scss";
import Icon from "@/components/Icon";

interface PaymentFormProps {
  handleSubmit: (values: any, onClose: PaymentFormProps["onClose"]) => void;
  onClose: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ handleSubmit, onClose }) => {
  const initialValues = { firstName: "", lastName: "", phone: "", address: "", name: "", doorNo: "", city: "", district: "", zip: "" };
  const { t } = useTranslation();
  const validationSchema = paymentSchema(t);

  return (
    <div className={paymentStyle.form_container}>
      <div className={paymentStyle.form_header}>
        <h3 className={paymentStyle.form_title}>{t("payment.addNewAddress")}</h3>
        <Icon onClick={onClose} className={paymentStyle.close_icon} icon="close" size={22} />
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => handleSubmit(values, onClose)}>
        {({ handleSubmit }) => (
          <div className={paymentStyle.form}>
            <div className={paymentStyle.input_group}>
              <Input label="payment.addressName" placeholder="payment.addressName" name="name" />
              <Input label="payment.addressFirstName" placeholder="payment.addressFirstName" name="firstName" />
            </div>
            <div className={paymentStyle.input_group}>
              <Input label="payment.addressLastName" placeholder="payment.addressLastName" name="lastName" />
              <Input label="payment.addressPhone" placeholder="payment.addressPhone" name="phone" />
            </div>
            <div className={paymentStyle.input_group}>
              <Input label="payment.addressCity" placeholder="payment.addressCity" name="city" />
              <Input label="payment.addressDistrict" placeholder="payment.addressDistrict" name="district" />
            </div>
            <div className={paymentStyle.input_group}>
              <Input label="payment.addressDoorNumber" placeholder="payment.addressDoorNumber" name="doorNo" />
              <Input label="payment.address" placeholder="payment.address" name="address" />
            </div>
            <div className={paymentStyle.form_actions}>
              <Button onClick={handleSubmit} type="submit">
                {t("payment.saveAddress")}
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
