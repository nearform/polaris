import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { i18nextConfiguration } from './common'

/* import this in unit tests using useTranslation in tests, for example:
import 'services/i18n/for-tests'; // activates react-i18n
*/

const config = Object.assign({}, i18nextConfiguration, {
  fallbackLng: 'en',
  lng: 'cimode',
  backend: undefined,
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: false,
    suspense: false
  },
  resources: {
    en: {
      core: {
        test: 'test'
      }
    }
  }
})

i18n.use(initReactI18next).init(config)

export { supportedLocales } from './common'
export default i18n
