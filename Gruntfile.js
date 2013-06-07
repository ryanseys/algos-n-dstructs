module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // $ grunt watch
    watch: {
      files: ['**/*.js', '!Gruntfile.js'],
      tasks: ['cafemocha']
    },
    cafemocha: {
      testAll: {
        src: 'tests/*.js',
        options: {
          reporter: 'min',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cafe-mocha');
  grunt.registerTask('default', ['cafemocha']);
};
