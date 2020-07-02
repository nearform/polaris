module.exports = {
  preset: 'jest-expo',
  testTimeout: 10000,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|unimodules-permissions-interface|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|react-router-native|react-router-navigation|@babel)'
  ],
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
