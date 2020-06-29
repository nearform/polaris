import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { format as formatDate } from "date-fns";
import {
  fallback,
  supportedLocales,
  namespaces,
  defaultNamespace,
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
      format: (value, format) => {
        if (value instanceof Date && format) {
          switch (format) {
            case "date_do":
              // we should pass locale to formatDate too
              return formatDate(value, "do MMM yyyy");
            default:
              return value.toString();
          }
        } else return value.toString();
      },
    },
  });

export default i18n;
