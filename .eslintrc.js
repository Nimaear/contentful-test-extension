module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'max-len': [1, 120, 2, { ignoreComments: true }],
    'no-inline-comments': 0,
    'one-var': 0,
  },
  extends: ['eslint:recommended', 'idiomatic', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
};
