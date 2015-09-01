module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      sass: {                              // Task
        dev: {                            // Target
          options: {                       // Target options
            style: 'expanded'

          },
          files: {                         // Dictionary of files
            'public/stylesheets/style.css': 'assets/scss/style.scss',       // 'destination': 'source'
          }
        }
      },
      wiredep: {
        dev: {
          // Point to the files that should be updated when
          // you run `grunt wiredep`
          src: [
            'views/*.jade',   // .jade support...
          ]
        }
      },
      watch: {
        dev: {
           files: ['assets/js/*.js', 'views/*.jade', 'assets/scss/*.scss'],
           tasks: ['wiredep','sass']
        }
      }
    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  // Default task(s).
  grunt.registerTask('default', ['sass','wiredep','watch']);

};