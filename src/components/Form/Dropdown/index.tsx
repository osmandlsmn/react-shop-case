import Icon from "@/components/Icon";
import React, { useState } from "react";
import DropdownStyle from "./Dropdown.module.scss";
import type { Option } from "@/types";

interface DropdownProps {
  options: Option[];
  selected: Option;
  onChange: (selected: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, selected }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (option: Option) => {
    onChange(option);
    setIsActive(!isActive);
  };

  return (
    <div className={DropdownStyle.dropdown}>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={DropdownStyle.dropdown_btn}
      >
        {selected.label}
        {isActive ? <Icon icon="arrow-drop-up" size={20} /> : <Icon icon="arrow-drop-down" size={20} />}
      </div>
      <div className={DropdownStyle.content} style={{ display: isActive ? "block" : "none" }}>
        {options.map((option) => (
          <div key={option.value} onClick={() => handleClick(option)} className={DropdownStyle.content_item}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
