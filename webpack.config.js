var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractPlugin = new extractTextPlugin({
  filename: 'main.css',
});

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      /* {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'icons/',
              publicPath: 'icons/',
            },
          },
        ],
      },*/
      /*{
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      },*/
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devtool: 'source-map',
};
