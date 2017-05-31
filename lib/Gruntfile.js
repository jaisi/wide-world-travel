module.exports = function(grunt) {

  grunt.initConfig({
   
    browserify: {
      js: {
          src: ['../app/**/*.js'],
          dest: '../dist/app.js'
      },
      options: {
          transform: ['hbsfy'],
          browserifyOptions: {
            paths: ["./node_modules"]
          }
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "app": true},
        browserify: true
      },
      files: ['../app/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../scss/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
