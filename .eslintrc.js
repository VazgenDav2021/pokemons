module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaVersion: 2018
  },
  plugins: ['react', 'import', 'react-hooks'],
  ignorePatterns: ['node_modules/'],
  rules: {
    strict: 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 'off'
  },
  settings: {
    react: {
      version: 'latest' // "detect" automatically picks the version you have installed.
    }
  }
};
