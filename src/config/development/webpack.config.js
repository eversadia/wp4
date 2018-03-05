const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' )
const webpack = require( 'webpack' )

const React = require( 'react' )
const config = {}

config.entry = {
  app: './src/index.js'
}

config.output = {
  path: path.resolve( __dirname, '../../../build' ),
  filename: '[name].js?[hash]'
}

config.mode = 'development'

config.target = 'web'

//config.externals = [ 'react' ]

config.devtool = 'inline-source-map'

config.devServer = {
  proxy: {},
  hot: true,
  https: false,
  compress: false,
  port: 9999
}

config.module = {
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
  } ]
}

config.plugins = [
  //new CleanWebpackPlugin( [ '../../../build' ] ),
  new UglifyJSPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin( {
    template: './src/template/main.html',
    title: 'QTP is',
    filename: 'index.html',
    hash: true,
    inject: 'body'
  } ),
  new webpack.ProvidePlugin( {
    React: 'react',
    ReactDOM: 'react-dom',
    Promise: 'exports?global.Promise!es6-promise',
    fetch: 'exports?self.fetch!whatwg-fetch'
  } )
]

config.watch = true

// config.performance = {
//   hints: 'error'
// }

// config.stats = {
//   warnings: true,
//   entrypoints: true
// }

config.resolve = {
  alias: {
    src: path.resolve( __dirname, 'src/' ),
    utils: path.resolve( __dirname, 'src/utils/' )
  }
}

module.exports = config
