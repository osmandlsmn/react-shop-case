import React from "react";
import buttonStyle from "./Button.module.scss";

const variants = {
  primary: buttonStyle.primary,
  secondary: buttonStyle.secondary,
  outline: buttonStyle.outline,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, onClick, ...props }) => {
  return (
    <button className={`${buttonStyle.button} ${variants[variant]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
