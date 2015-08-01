module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: '*.scss',
                    dest: 'src/css',
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
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass:dev', 'recess:dev'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-recess');

    // Default task(s).
    grunt.registerTask('default', ['watch:sass']);

};