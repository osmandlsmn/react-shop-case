import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "@/components/Form/Dropdown";
import type { Option } from "@/types";

const ChooseLanguage = () => {
  const { i18n } = useTranslation();
  const languages: Option[] = [
    {
      value: "tr",
      label: "languages.tr",
    },
    {
      value: "en",
      label: "languages.en",
    },
  ];

  const getLanguage = languages.find((language) => language.value === i18n.language);
  const [language, setLanguage] = useState<Option>(getLanguage as Option);

  const updateLanguage = (selected: Option) => {
    window.localStorage.setItem("language", selected.value);
    i18n.changeLanguage(selected.value);
    setLanguage(selected);
  };

  return <Dropdown selected={language} onChange={updateLanguage} options={languages} />;
};

export default ChooseLanguage;
