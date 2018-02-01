const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    // add plugins
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    port: 9000
  }
};
