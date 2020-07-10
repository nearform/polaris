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

global.console = {
  log: console.log,
  error: jest.fn(),
  warn: jest.fn(),
  info: console.info,
  debug: console.debug
};

jest.useFakeTimers();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
  useNavigationParam: () => jest.fn(),
  useRoute: () => jest.fn(),
  NavigationContainer: () => jest.fn(),
  NavigationEvents: 'mockNavigationEvents'
}));

jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: () => jest.fn(),
  DrawerContent: () => jest.fn()
}));

jest.mock('react-native-vector-icons', () => ({
  AntDesign: () => jest.fn()
}));

jest.mock('react-native-elements', () => ({
  Header: () => 'Header'
}));
