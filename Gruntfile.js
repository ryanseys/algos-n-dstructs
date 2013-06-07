module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['**/*.js', '!Gruntfile.js'],
      tasks: ['cafemocha']
    },
    cafemocha: {
      testAll: {
        src: 'test/*.js',
        options: {
          growl: true,
          reporter: 'nyan',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cafe-mocha');
  grunt.registerTask('default', ['cafemocha']);
}
