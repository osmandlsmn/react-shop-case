import Button from "@/components/Elements/Button";
import Icon from "@/components/Icon";
import type { DialogButton } from "@/types";
import React from "react";
import dialogStyle from "./Dialog.module.scss";

interface Props {
  title: string;
  message: string;
  buttons: DialogButton[];
  onClose: () => void;
}

const Dialog: React.FC<Props> = ({ title, message, buttons, onClose }) => {
  return (
    <div className={dialogStyle.dialog}>
      <div className={dialogStyle.dialog_content}>
        <div className={dialogStyle.header}>
          <h3 className={dialogStyle.title}>{title}</h3>
          <Icon onClick={onClose} className={dialogStyle.close_icon} icon="close" size={22} />
        </div>
        <p className={dialogStyle.description}>{message}</p>
        <div className={dialogStyle.dialog_buttons}>
          {buttons.map((button) => {
            return (
              <Button key={button.label} variant={button.variant} onClick={() => button.onClick(onClose)}>
                {button.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
