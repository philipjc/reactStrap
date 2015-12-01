var path = require('path');
var webpackConfig = require('./webpack.config');
var entry = path.resolve(webpackConfig.context, webpackConfig.entry);
var preprocessors = {};
preprocessors[entry] = ['webpack'];

var webpack = require('karma-webpack');


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: ['./tests/**/*.test.js'],

    plugins: [
      webpack,
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],

    browsers: [ 'PhantomJS' ],

    // webpack: webpackConfig,
    webpack: {
      module: {
        loaders: [{
          test: /\.(js|jsx)$/, exclude: /(node_modules)/,
          loader: 'babel-loader'
        }],
        postLoaders: [{
          test: /\.(js|jsx)$/, exclude: /(node_modules|tests)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*.test.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

  });
};
