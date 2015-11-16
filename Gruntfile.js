module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "public/css/main.css": "public/less/main.less"
        }
      }
    },
    concat: {   
      dist: {
        src: [
          'public/js/**/*.js'
        ],
        dest: 'public/build/app.js',
      }
    },
    watch: {
      styles: {
        files: ['public/less/**/*.less','public/js/**/*.js'],
        tasks: ['less','concat'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'concat' , 'watch']);
};