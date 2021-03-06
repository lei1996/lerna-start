const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: ['./dist'],
    historyApiFallback: {
      rewrites: [],
    },
    proxy: {},
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
