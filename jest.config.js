module.exports = {
  preset: 'react-native',
  testTimeout: 10000,
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '\\.(js|jsx)': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.json': '<rootDir>/jest.jsonTransform.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|react-navigation-redux-helpers|@react-navigation/.*|@unimodules/.*|jest-expo/.*|sentry-expo|native-base))'
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js', './jest.setup.js'],
  automock: false,
  moduleNameMapper: {
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^assets(.*)$': '<rootDir>/src/assets/$1',
    '^services(.*)$': '<rootDir>/src/services/$1',
    '^test-utils(.*)$': '<rootDir>/src/test-utils'
  }
};
