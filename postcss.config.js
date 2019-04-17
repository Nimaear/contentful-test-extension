module.exports = ({ webpack }) => {
  // Don't do this in test environments
  if ( typeof webpack !== 'undefined' && webpack ) {
    const themeFile = require.resolve( './src/theme.js' );
    webpack.addDependency( themeFile );
    delete require.cache[ themeFile ];

    const pluginsFile = require.resolve( './postcss.plugins.js' );
    webpack.addDependency( pluginsFile );
    delete require.cache[ pluginsFile ];

    return {
      plugins: require( pluginsFile )(),
      sourceMap: true,
    };
  }
  return {
    plugins: require( './postcss.plugins.js' ),
    sourceMap: true,
  };
};
