import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "@/components/Form/Dropdown";
import type { Option } from "@/types";

const ChooseLanguage = () => {
  const languages = [
    {
      value: "tr",
      label: "languages.tr",
    },
    {
      value: "en",
      label: "languages.en",
    },
  ];

  const [language, setLanguage] = useState<Option>(languages[0]);
  const { i18n } = useTranslation();

  const updateLanguage = (selected: Option) => {
    i18n.changeLanguage(selected.value);
    setLanguage(selected);
  };

  return <Dropdown selected={language} onChange={updateLanguage} options={languages} />;
};

export default ChooseLanguage;
