import { format } from 'date-fns'
import { enUS, it } from 'date-fns/locale'
import translationEN from 'src/lang/en.json'
import translationIT from 'src/lang/it.json'

const languageToLocale = {
  en: enUS,
  it
}

const formatDate = (date, dateFormat, language) => {
  const locale = languageToLocale[language] || languageToLocale.en
  return format(date, dateFormat, { locale: locale })
}

const supportedLanguages = ['en', 'it']
const namespaces = ['common']

export const resources = {
  en: {
    name: 'English',
    ...translationEN
  },
  it: {
    name: 'Italiano',
    ...translationIT
  }
}

export const i18nextConfiguration = {
  supportedLngs: supportedLanguages,
  fallbackLng: supportedLanguages[0],
  resources,
  ns: namespaces,
  defaultNS: namespaces[0],
  interpolation: {
    escapeValue: false,
    format: (value, format, language) => {
      if (value instanceof Date) {
        return formatDate(value, format, language)
      }
      return value.toString()
    }
  }
}
