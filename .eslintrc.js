module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint-config-prettier',
  ],
  parser: 'babel-eslint',
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  plugins: ['prettier'],
}
