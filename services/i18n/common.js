import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import langEn from "../../lang/en.json";

const languageToLocale = {
  en: enUS,
};

export const formatDate = (date, dateFormat, lng) => {
  const locale = languageToLocale[lng] || languageToLocale.en;
  return format(date, dateFormat, { locale: locale });
};

export const fallback = "en";
export const defaultNamespace = "common";
export const namespaces = ["common"];

export const supportedLocales = {
  en: {
    name: "English",
    ...langEn,
  },
};
