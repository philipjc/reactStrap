var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


var config = {
  context: path.join(__dirname,  '/app'),
  entry: 'App.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  resolve: {
    root: path.resolve(__dirname, './app'),
    modulesDirectories: ['web_modules', 'node_modules', 'js', 'css'],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      },
      include: path.join(__dirname, 'app')
    }]
  },

  devServer: {
    port: 4000,
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlwebpackPlugin({
      title: 'setup'
    }),

    // env variables we want resolved in out code
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ]
}

module.exports = config;
