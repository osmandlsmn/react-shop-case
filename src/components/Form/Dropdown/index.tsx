import Icon from "@/components/Icon";
import React, { useState } from "react";
import DropdownStyle from "./Dropdown.module.scss";
import type { Option } from "@/types";
import { useTranslation } from "react-i18next";
interface DropdownProps {
  options: Option[];
  selected?: Option;
  onChange: (selected: Option) => void;
  placeholder?: string;
  label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, selected, label }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const handleClick = (option: Option) => {
    onChange(option);
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div className={DropdownStyle.dropdown} tabIndex={0} onBlur={handleClose}>
      {label && <p className={DropdownStyle.label}>{label}</p>}
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={DropdownStyle.dropdown_btn}
      >
        {selected?.label ? t(selected?.label as string) : t("sidebar.filterPlaceholder")}
        {isActive ? <Icon icon="arrow-drop-up" size={20} /> : <Icon icon="arrow-drop-down" size={20} />}
      </div>
      <div className={DropdownStyle.content} style={{ display: isActive ? "block" : "none" }}>
        {options.map((option, index) => (
          <div key={index} onClick={() => handleClick(option)} className={DropdownStyle.content_item}>
            {t(option.label)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
