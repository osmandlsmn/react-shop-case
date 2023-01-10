import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/translations.json";
import tr from "./tr/translations.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: "tr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
