const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'client',
  mode: 'development',
  entry: './src/app/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    // filename: 'index.js',
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello World!',
      filename: 'index.html',
      favicon: './assets/favicon.ico',
      template: 'assets/index.html',
    }),
  ],
};
