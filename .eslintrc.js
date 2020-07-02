module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:cypress/recommended'
  ],
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        trailingComma: 'none'
      }
    ],
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
