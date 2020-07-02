jest.mock('services/i18n/common', () => ({
  i18nextConfiguration: {},
  supportedLocales: {}
}));

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
