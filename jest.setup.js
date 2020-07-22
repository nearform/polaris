// Stop jest using .ios in web tests until https://github.com/nearform/polaris/issues/42 is done
jest.mock('components/atoms/picker-sheet', () => jest.requireActual('components/atoms/picker-sheet/index.jsx'));

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
}));

require('services/i18n/for-tests'); // activates react-i18n with test config

jest.mock('expo-localization', () => ({
  locale: 'en-US'
}));

jest.mock('react-native/Libraries/LogBox/LogBox', () => ({
  ignoreLogs: () => {},
  ignoreAllLogs: () => {},
  install: () => {},
  uninstall: () => {}
}));

// Show error details and warnings in console but disable Native Yellowbox
// which can cause infinite loops by failing to access native APIs
global.console.disableYellowBox = true;

jest.useFakeTimers();

  DrawerContent: () => jest.fn()
}));

jest.mock('react-native-vector-icons', () => ({
  AntDesign: () => jest.fn()
}));

jest.mock('react-native-elements', () => ({
  Header: () => 'Header'
}));
