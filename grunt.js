/*global module:false*/
module.exports = function(grunt) {

  // Register grunt tasks.
  grunt.loadNpmTasks('grunt-less');

  // Project configuration.
  grunt.initConfig({
    less: {
      base: {
        src: 'less/style.less',
        dest: 'css/style.css',
        options: {
          compress: false
        }
      }
    },
    watch: {
      tasks: 'less'
    }
  });

  // Default task.
  grunt.registerTask('default', 'less');

};
