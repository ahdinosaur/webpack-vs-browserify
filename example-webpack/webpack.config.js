/* eslint-env node */
const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV || 'development';

module.exports = cfg = {
  devtool: 'cheap-inline-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../src/index')
  ],

  output: {
    path: path.join(__dirname, '../public'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, '../public')
  },

  resolve: {
    extensions: ['', '.js', '.css']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, '..', 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', //eslint-disable-line
        include: path.join(__dirname, '..', 'src')
      }
    ]
  }
};
