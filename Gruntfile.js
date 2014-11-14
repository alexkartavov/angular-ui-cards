module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cfg: {
    	sourceDir: "source",
    	distDir: "dist",
        demoDir: "demo"
    },
    concat: {
      build: {
        src: [
          '<%= cfg.sourceDir %>/main.js',
          '<%= cfg.sourceDir %>/directives/uiCards.js',
          '<%= cfg.sourceDir %>/directives/uiCardField.js',
          '<%= cfg.sourceDir %>/directives/uiCardTemplate.js'
        ],
        dest: '<%= cfg.distDir %>/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= cfg.distDir %>/<%= pkg.name %>.js',
        dest: '<%= cfg.distDir %>/<%= pkg.name %>.min.js'
      }
    },

    // watch
    watch: {
      livereload: {
        files: [
          '<%= cfg.sourceDir %>/**/*',
          '<%= cfg.demoDir %>/**/*'
        ],
        options: {
          livereload: true
        }
      },
      build: {
        files: [
          '<%= cfg.sourceDir %>/**/*.js',
          '!<%= cfg.distDir %>/*.js'
        ],
        tasks: ['concat:build', 'uglify:build']
      }
    }
      
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};
