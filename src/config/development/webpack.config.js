const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' )
const webpack = require( 'webpack' )
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )

const cssExtractTextPlugin = new ExtractTextPlugin( '[name].[hash].css', {
  allChunks: true
} )

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

// config.externals = [ 'react' ]

config.devtool = 'inline-source-map'

config.devServer = {
  proxy: {},
  //hot: true,
  // https: false,
  // compress: false,
  port: 9999
}

config.module = {
  rules: [ {
    test: /\.css$/,
    use: [ {
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    } ]
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
  // new webpack.optimize.AggressiveSplittingPlugin( {
  //   minSize: 30000, //Byte, split point. Default: 30720
  //   maxSize: 50000, //Byte, maxsize of per file. Default: 51200
  //   chunkOverhead: 0, //Default: 0
  //   entryChunkMultiplicator: 1, //Default: 1
  // } ),
  //new CleanWebpackPlugin( [ '../../../build' ] ),
  cssExtractTextPlugin,
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
    // React: 'react',
    // ReactDOM: 'react-dom',
    Promise: 'exports?global.Promise!es6-promise',
    fetch: 'exports?self.fetch!whatwg-fetch'
  } ),

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
