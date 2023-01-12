import React, { useState } from "react";
import Input from "@/components/Form/Input";
import Icon from "@/components/Icon";
import sidebarStyle from "./Sidebar.module.scss";
import Dropdown from "../../Form/Dropdown";
import { Option } from "@/types";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/utils/hooks";
import { filterByImportance, filterByName, filterByPrice } from "@/store/products/productsSlice";
import { importanceLevels, priceRanges } from "./Sidebar.constans";
import { Formik } from "formik";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [priceRange, setPriceRange] = useState<Option>();
  const [importanceLevel, setImportanceLevel] = useState<Option>();

  const updatePriceRange = (selected: Option) => {
    setPriceRange(selected);
    dispatch(filterByPrice(selected.value));
  };

  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    dispatch(filterByName(e.target.value));
  };

  const updateImportanceLevel = (selected: Option) => {
    setImportanceLevel(selected);
    dispatch(filterByImportance(selected.value));
  };

  return (
    <div className={sidebarStyle.sidebar}>
      <form className={sidebarStyle.form}>
        <Formik initialValues={{}} onSubmit={() => {}}>
          <Input
            name="search"
            value={searchValue}
            onChange={updateSearchValue}
            renderLeftIcon={<Icon icon="search" size={20} />}
            placeholder="sidebar.searchPlaceholder"
          />
        </Formik>
        <Dropdown label={t("sidebar.priceRange") as string} selected={priceRange} options={priceRanges} onChange={updatePriceRange} />
        <Dropdown
          label={t("sidebar.importanceLevel") as string}
          selected={importanceLevel}
          options={importanceLevels}
          onChange={updateImportanceLevel}
        />
      </form>
    </div>
  );
};

export default Sidebar;
