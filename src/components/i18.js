import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../assets/language/en";
import fa from "../assets/language/fa";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      fa,
    },
    // lng: "fa",
    // defines language, but we want "LanguageDetector" to work
    fallbackLng: "fa",

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
  });

export default i18n;
