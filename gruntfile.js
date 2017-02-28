module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./public",
            src: ["**"],
            dest: "./dist/public"
          },
          {
            expand: true,
            cwd: "./views",
            src: ["**"],
            dest: "./dist/views"
          }
        ]
      },
      modbuild:{
        files: [
          {
            expand: true,
            cwd: "./node_modules",
            src: [
              "@angular/**",
              "zone.js/**",
              "systemjs/**",
              "core-js/**",
              "bootstrap/dist/**",
              "gentelella/build/**",
              "jquery/dist/**",
              "font-awesome/**"
            ],
            dest: "./dist/public/node_modules"
          }
        ]
      }
    },
    ts: {
      app: {
        files: [{
          src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"],
          dest: "./dist"
        }],
        options: {
          module: "commonjs",
          target: "es6",
          sourceMap: true
        }
      }
    },
    watch: {
      ts: {
        files: ["src/\*\*/\*.ts"],
        tasks: ["ts"]
      },
      views: {
        files: ["views/**/*.pug", "public/**"],
        tasks: ["ts","copy:build"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", [
    "copy:build",
    "ts"
  ]);

};
