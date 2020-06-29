import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import translationEN from "../../lang/en.json";

const languageToLocale = {
  en: enUS,
};

const formatDate = (date, dateFormat, language) => {
  const locale = languageToLocale[language] || languageToLocale.en;
  return format(date, dateFormat, { locale: locale });
};

const fallback = "en";
const namespaces = ["common"];
const defaultNamespace = "common";
const supportedLocales = {
  en: {
    name: "English",
    ...translationEN,
  },
};

export const i18nextConfiguration = {
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
};
