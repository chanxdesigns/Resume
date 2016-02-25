/**
 * Created by Chanx on 2/25/2016.
 */

module.exports = function (grunt) {
  grunt.initConfig({
      sass: {
          dist: {
              files: {
                  "dist/css/style.css" : "sass/style.scss"
              }
          }
      },
      copy: {
          html: {
              cwd: "",
              expand: true,
              src: "*.html",
              dest: "dist/"
          },
          js: {
              cwd: "js",
              expand: true,
              src: "*.js",
              dest: "dist/js"
          }
      }
  });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default",["sass","copy"]);
};