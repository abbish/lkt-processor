module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: {
                src: ['dist']
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '**',
                        dest: 'dist/'
                    },
                    {
                        src: 'package.json',
                        dest: 'dist/'
                    },
                    {
                        src: 'README.md',
                        dest: 'dist/'
                    },
                    {
                        src: 'LICENSE',
                        dest: 'dist/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean:dist', 'copy:dist']);

}