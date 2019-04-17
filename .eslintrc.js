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
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      pragma: 'React', // Pragma to use, default to "React"
      version: '16.8.3', // React version. "detect" automatically picks the version you have installed.
      flowVersion: '0.53', // Flow version
    },
  },
  rules: {
    'max-len': [1, 120, 2, { ignoreComments: true }],
    'no-inline-comments': 0,
    'one-var': 0,
  },
  extends: ['eslint:recommended', 'idiomatic', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
};
