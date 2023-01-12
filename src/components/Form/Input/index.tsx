import React, { InputHTMLAttributes } from "react";
import { ErrorMessage, Field } from "formik";
import { useTranslation } from "react-i18next";
import inputStyle from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  renderLeftIcon?: React.ReactNode;
  renderRightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ name, label, renderLeftIcon, renderRightIcon, placeholder, ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={inputStyle.container}>
      {label && (
        <label htmlFor={name} className={inputStyle.label}>
          {t(label)}
        </label>
      )}
      <div className={inputStyle.input_box}>
        {renderLeftIcon}
        <Field id={name} name={name} className={inputStyle.input} placeholder={t(placeholder as string) as string} type="text" {...props} />
        {renderRightIcon}
      </div>
      <ErrorMessage name={name as string} component="div" className={inputStyle.error} />
    </div>
  );
};

export default Input;
