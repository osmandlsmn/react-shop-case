import React, { useEffect, useState } from "react";
import Input from "@/components/Form/Input";
import Icon from "@/components/Icon";
import sidebarStyle from "./Sidebar.module.scss";
import Dropdown from "../Form/Dropdown";
import { Option } from "@/types";
import { useTranslation } from "react-i18next";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const priceRanges = [
    { value: "growing", label: "sidebar.priceRanges.growing" },
    { value: "descending", label: "sidebar.priceRanges.descending" },
  ];

  const [priceRange, setPriceRange] = useState<Option>(priceRanges[0]);

  const updatePriceRange = (selected: Option) => {
    setPriceRange(selected);
  };

  return (
    <div className={sidebarStyle.sidebar}>
      <form className={sidebarStyle.form}>
        <Input renderLeftIcon={<Icon icon="search" size={20} />} label="test" placeholder="Aramak istediğin ürünü yaz." />
        <Dropdown label="Fiyat Aralığı" selected={priceRange} options={priceRanges} onChange={updatePriceRange} />
        <Dropdown label="Önem Derecesi" selected={priceRange} options={priceRanges} onChange={updatePriceRange} />
      </form>
    </div>
  );
};

export default Sidebar;
