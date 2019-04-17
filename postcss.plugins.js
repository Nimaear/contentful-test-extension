const isDev = process.env.NODE_ENV === 'development';

const postcssPresetEnv = require( 'postcss-preset-env' );
const cssNano = require( 'cssnano' )({
  preset: 'default',
});

module.exports = () => {
  return [
    require( 'postcss-import' )(),
    require( 'postcss-css-reset' )(),
    require( 'postcss-mixins' )(),
    require( 'postcss-nested' )(),
    require( 'postcss-flexbugs-fixes' )(),
    require( 'autoprefixer' )({
      browsers: [ 'last 3 versions', 'IE >= 9', 'Edge <= 15' ],
    }),
    require( 'postcss-simple-vars' )({
      variables: () => require( './src/theme.js' )(),
    }),
    postcssPresetEnv({
      browsers: 'last 2 versions',
      stage: 2,
      features: {
        'nesting-rules': true,
        'color-mod-function': {
          unresolved: 'warn',
        },
      },
    }),
    isDev ? undefined : cssNano,
  ];
};
