module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    env: {
      node: true,
      es2020: true,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // integrates Prettier
    ],
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: true }],
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
    overrides: [
      {
        files: ['*.config.js', '*.config.mts', '.eslintrc.js', 'prettier.config.js'],
        env: {
          node: true,
        },
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
    ],
  };
