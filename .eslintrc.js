module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  rules: {
  }
}
