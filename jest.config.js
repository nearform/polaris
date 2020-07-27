// Importing initiates @testing-library config as a side effect even if the import is unused
const jestPreset = require('@testing-library/react-native/jest-preset')

const aliasMappings = {
  '^store/(.*)$': '<rootDir>/src/store/$1',
  '^components/(.*)$': '<rootDir>/src/components/$1',
  '^src/(.*)$': '<rootDir>/src/$1',
  '^utils/(.*)$': '<rootDir>/src/utils/$1',
  '^constants/(.*)$': '<rootDir>/src/constants/$1',
  '^assets(.*)$': '<rootDir>/src/assets/$1',
  '^services(.*)$': '<rootDir>/src/services/$1',
  '^routes(.*)$': '<rootDir>/src/routes/$1',
  '^test-utils(.*)$': '<rootDir>/src/test-utils/$1',
  '\\.svg$': '<rootDir>/__mocks__/svgrMock.js'
}

const nativeMappings = {
  // React Navigation nav builders contain native elements and API calls that Jest can't handle
  // In Jest, skip the Navigation-based UI, and just follow links to their target View
  // No ^ because 'utils/...' may have already been mapped to 'src/...' or '../../utils' etc
  'utils/navigators/create-drawer-nav(.*)$':
    '<rootDir>/src/utils/navigators/create-bare-nav$1',
  ...aliasMappings
}

const setupFiles = [
  './node_modules/react-native-gesture-handler/jestSetup.js',
  './jest.setup.js'
]

// jestPreset in native only - on web, it redirects react-native-web components back to react-native
const nativeSetupFiles = [...jestPreset.setupFiles, ...setupFiles]

const settings = {
  testTimeout: 10000,
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '\\.(js|jsx)': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.json': '<rootDir>/jest.jsonTransform.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|expo-camera|react-native-adapter|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-native-vector-icons|react-native-vector-icons/.*|react-navigation|react-navigation-redux-helpers|@react-navigation/.*|unimodules-permissions-interface|@expo/vector-icons/.*|@unimodules|@unimodules/.*|jest-expo/.*|sentry-expo|native-base|@react-native-community/picker/js/.+\\.jsx?))'
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  setupFiles,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  automock: false,
  clearMocks: true,
  moduleNameMapper: aliasMappings
}

const nativeSettings = {
  ...settings,
  setupFiles: nativeSetupFiles,
  moduleNameMapper: nativeMappings
}

module.exports = {
  projects: [
    { preset: 'jest-expo/web', ...settings },
    { preset: 'jest-expo/ios', ...nativeSettings },
    { preset: 'jest-expo/android', ...nativeSettings }
  ]
}
