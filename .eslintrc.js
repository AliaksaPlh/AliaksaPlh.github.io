// eslint-disable-next-line no-undef
module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true
    },
    globals: {
      fetchMock: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest'
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      semi: ['error', 'always'],
      'no-case-declarations': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': 0,
      camelcase: 0,
      'accessor-pairs': 0,
      'no-useless-constructor': 0,
      'no-return-assign': 0,
      'space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }],
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/ban-types': 0,
      'no-prototype-builtins': 0,
      '@typescript-eslint/ban-ts-comment': 0
    }
  };