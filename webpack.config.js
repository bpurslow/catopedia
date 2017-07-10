const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
	index: [
	  'webpack-dev-server/client?http://localhost:3000',
	  './client/index.js',
	]
  },
  output: {
	path: path.join(__dirname, '/dist/'),
	filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
	loaders: [
	  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
	  { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'css-loader'},
	  { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
	  { test: /\.(jpe?g|png|svg|gif)$/, loader: 'file-loader', options: {
		  name: '[name].[ext]',
		}
	  },
      { test: /(\.woff|\.woff2)$/, loader: 'ignore-loader' },
      { test: /\.ttf$/, loader: 'ignore-loader' },
      { test: /\.eot$/, loader: 'ignore-loader' }
	]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}