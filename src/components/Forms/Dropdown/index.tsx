import Icon from "@/components/Icon";
import React, { useState } from "react";
import DropdownStyle from "./Dropdown.module.scss";

interface DropdownProps {
  options: string[];
  selected: string;
  onChange: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, selected }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onChange(e.currentTarget.innerText);
    setIsActive(!isActive);
  };

  return (
    <div className={DropdownStyle.dropdown}>
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className={DropdownStyle.dropdown_btn}
      >
        {selected}
        {isActive ? (
          <Icon icon="arrow-drop-up" size={20} />
        ) : (
          <Icon icon="arrow-drop-down" size={20} />
        )}
      </div>
      <div
        className={DropdownStyle.content}
        style={{ display: isActive ? "block" : "none" }}
      >
        {options.map((option) => (
          <div onClick={handleClick} className={DropdownStyle.content_item}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
