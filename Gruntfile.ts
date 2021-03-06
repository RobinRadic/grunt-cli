/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2015 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */

'use strict';

export = function(grunt:any) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'bin/*',
        'lib/**/*.js',
        'Gruntfile.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // "npm test" runs these tasks
  grunt.registerTask('test', ['jshint']);

  // Default task.
  grunt.registerTask('default', ['test']);

};
