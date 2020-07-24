import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'

import { i18nextConfiguration } from './common'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    // We will get back a string like "en-US".
    // We return a string like "en" to match our language files.
    callback(Localization.locale.split('-')[0])
  },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n.use(languageDetector).use(initReactI18next).init(i18nextConfiguration)

export { supportedLocales } from './common'
export default i18n
