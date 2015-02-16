'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'client/app/app.scss',
    'dest': 'build/client/app'
  },

  'scripts': {
    'src' : 'client/**/*.js',
    'dest': 'build/client'
  },

  'images': {
    'src' : 'client/app/assets/**/*',
    'dest': 'build/client/app/assets/images'
  },

  // 'views': {
  //   'watch': [
  //     'app/index.html',
  //     'app/views/**/*.html'
  //   ],
  //   'src': 'app/views/**/*.html',
  //   'dest': 'app/js'
  // },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./client/app/app.js'],
    'bundleName': 'app.js',
    'sourcemap' : true,
  },

  // 'test': {
  //   'karma': 'test/karma.conf.js',
  //   'protractor': 'test/protractor.conf.js'
  // }

};
