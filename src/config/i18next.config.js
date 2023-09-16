import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
    },
  });
