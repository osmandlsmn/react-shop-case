import React, { InputHTMLAttributes } from "react";
import inputStyle from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  renderLeftIcon?: React.ReactNode;
  renderRightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ renderLeftIcon, renderRightIcon, ...props }) => {
  return (
    <div className={inputStyle.input_box}>
      {renderLeftIcon}
      <input className={inputStyle.input} type="text" {...props} />
    </div>
  );
};

export default Input;
