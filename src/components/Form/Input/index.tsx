import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import inputStyle from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  renderLeftIcon?: React.ReactNode;
  renderRightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ renderLeftIcon, renderRightIcon, placeholder, ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={inputStyle.input_box}>
      {renderLeftIcon}
      <input className={inputStyle.input} placeholder={t(placeholder as string) as string} type="text" {...props} />
      {renderRightIcon}
    </div>
  );
};

export default Input;
