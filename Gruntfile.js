module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: '**/*.scss',
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            }
        },
        recess: {
            dev: {
                src: ['src/css/style.css']
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['.tmp/css/**/*.css'],
                tasks: ['concat:css'],
                options: {
                    liverelaod: true
                }
            },
            sass: {
                files: ['src/**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    livereload: false
                }
            },
            ts: {
                files: ['src/**/*.ts'],
                tasks: ['typescript:base'],
                options: {
                    livereload: false
                }
            },
            js: {
                files: ['src/**/*.js'],
                options: {
                    livereload: true
                }
            }
        },
        concat: {
            css: {
                src: ['.tmp/css/**/*.css'],
                dest: 'src/css/style.css'
            }
        },
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'src/js/app.js',
                options: {
                    target: 'es5'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['sass:dev', 'concat:css', 'typescript:base', 'watch']);
};