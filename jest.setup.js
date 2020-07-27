jest.mock('services/i18n/common', () => ({
  i18nextConfiguration: {},
  supportedLocales: {
    en: {
      name: 'English'
    },
    it: {
      name: 'Italiano'
    }
  }
}))

require('services/i18n/for-tests') // activates react-i18n with test config

jest.mock('expo-localization', () => ({
  locale: 'en-US'
}))

jest.mock('react-native/Libraries/LogBox/LogBox', () => ({
  ignoreLogs: () => {},
  ignoreAllLogs: () => {},
  install: () => {},
  uninstall: () => {}
}))

// Show error details and warnings in console but disable Native Yellowbox
// which can cause infinite loops by failing to access native APIs
global.console.disableYellowBox = true

jest.useFakeTimers()

jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: () => {},
  DrawerContent: () => {}
}))

/*
 * Config for react-navigation: see https://reactnavigation.org/docs/testing/
 */
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
/*
 * End of react-navigation config
 */

jest.mock('react-native-vector-icons', () => ({
  AntDesign: () => jest.fn()
}))

jest.mock('react-native-vector-icons', () => ({
  AntDesign: () => jest.fn()
}))

jest.mock('react-native-elements', () => ({
  Header: () => 'Header'
}))
