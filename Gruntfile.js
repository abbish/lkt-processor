module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                'dist/package.json': 'src/package.json',
                'dist/README.md': 'src/README.md',
                'dist/LICENSE': 'src/LICENSE',
                'dist/*.js': 'src/*.js',
                'dist/lib/*.js': 'src/lib/*.js',
                'dist/config/*.js': 'src/config/*.js'

            }
        },
        clean: {
            logs: {
                src: 'src/logs/**/*',
                filter: 'isFile'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('dist', ['concat:dist']);

};