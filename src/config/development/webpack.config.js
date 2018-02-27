const path = require( 'path' )

const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' )
const webpack = require( 'webpack' )

module.exports = {
  entry: {
    app: './src/entry.js'
  },
  output: {
    path: path.resolve( __dirname, '../../../build' ),
    filename: '[name].js?[hash]'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../../../build'
  },
  module: {
    rules: [ {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }, {
      test: /\.js|\.jsx$/,
      exclude: /node_modules/,
      include: /src/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: [
        'htmllint-loader', {
          loader: 'html-loader'
        }
      ]
    }, ]
  },
  plugins: [
    new CleanWebpackPlugin( [ '../../../build' ] ),
    new UglifyJSPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin( {
    //   title: 'Code Splitting'
    // } )
  ]
}
