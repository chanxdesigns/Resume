/**
 * Created by Chanx on 2/25/2016.
 */

module.exports = function (grunt) {
  grunt.initConfig({
      sass: {
          dist: {
              files: {
                  "public/css/style.css" : "sass/style.scss"
              }
          }
      },
      copy: {
          html: {
              cwd: "",
              expand: true,
              src: "*.html",
              dest: "public/"
          },
          js: {
              cwd: "js",
              expand: true,
              src: "*.js",
              dest: "public/js"
          }
      }
  });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default",["sass","copy"]);
};