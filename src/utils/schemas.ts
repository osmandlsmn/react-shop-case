import * as yup from "yup";

export const paymentSchema = (t: Function) =>
  yup.object({
    firstName: yup.string().required(t("payment.validations.firstName")).min(2, t("payment.validations.firstNameMin")),
    lastName: yup.string().required(t("payment.validations.lastName")).min(2, t("payment.validations.lastNameMax")),
    name: yup.string().required(t("payment.validations.addressName")).min(2, t("payment.validations.addressNameMin")),
    phone: yup
      .number()
      .typeError(t("payment.validations.phoneIsNumber"))
      .required(t("payment.validations.phone"))
      .max(11, t("payment.validations.phoneMax")),
    address: yup.string().required(t("payment.validations.address")),
    district: yup.string().required(t("payment.validations.district")),
    city: yup.string().required(t("payment.validations.city")),
    doorNo: yup.string().required(t("payment.validations.doorNumber")),
  });
