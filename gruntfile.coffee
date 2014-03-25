module.exports = (grunt) ->
  grunt.initConfig({
    pkg: grunt.file.readJSON('_public/package.json')
    nodewebkit:
      src: './_public/**/*'
      options:
        version: "0.9.2"
        build_dir: './dist'
        mac: true,
        win: true,
        linux32: true,
        linux64: true
  })

  grunt.loadNpmTasks('grunt-node-webkit-builder')

  grunt.registerTask('default', ['nodewebkit'])
