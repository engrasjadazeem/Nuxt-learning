module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    indent: ['error', 2],
    'no-trailing-spaces': ['error', {}],
  },
};
