const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const HtmlWebpackInlineSourcePlugin = require( 'html-webpack-inline-source-plugin' );
const ExtractCssChunks = require( 'extract-css-chunks-webpack-plugin' );
const createMinifier = require( 'css-loader-minify-class' );
const argv = require( 'yargs' ).argv;
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

const getLocalIdent = createMinifier({
  prefix: 'cfe_',
});

const extension = argv.extension || 'Layout';

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
  },
};
if ( !isDev ) {
  postCssLoader.options.plugins = require( '../postcss.plugins.js' );
}

module.exports = {
  entry: `./src/Extensions/${extension}.js`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'eslint-loader' ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              sourceMap: true,
              localIdentName: '[name]_[local]-[hash:2]',
              getLocalIdent: isDev ? undefined : getLocalIdent,
            },
          },
          postCssLoader,
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractCssChunks({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
      hot: true,
      reloadAll: true,
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inlineSource: '.(js|css)$', // embed all javascript and css inline
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
  output: {
    path: path.resolve(__dirname,'..','dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: '/dist',
    hot: true,
    port: 3001,
  },
};
