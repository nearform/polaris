import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  fallback,
  supportedLocales,
  namespaces,
  defaultNamespace,
  formatDate,
} from "./common";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: fallback,
    resources: supportedLocales,
    ns: namespaces,
    defaultNS: defaultNamespace,
    interpolation: {
      escapeValue: false,
      format: (value, format, language) => {
        if (value instanceof Date) {
          return formatDate(value, format, language);
        }
        return value.toString();
      },
    },
  });

export default i18n;
