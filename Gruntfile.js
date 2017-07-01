module.exports = function(grunt) {
    require('load-grunt-tasks', 'grunt-contrib-cssmin', 'grunt-contrib-uglify', 'grunt-contrib-htmlmin', 'grunt-contrib-copy')(grunt);
    var config = grunt.file.readYAML('Gruntconfig.yml');
    grunt.initConfig({
        jshint: {
            all: ['src/js/*', 'src/jasmine/spec/*']
        },
        cssmin: {
            target: {
                files: [{
                        expand: true,
                        cwd: 'src/css/',
                        src: ['*.css', '!*min.css'],
                        dest: 'src/css/',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'src/jasmine/lib/jasmine-2.1.2/',
                        src: ['*.css', '!*min.css'],
                        dest: 'dist/jasmine/lib/jasmine-2.1.2/',
                        ext: '.css'
                    }
                ],
            },
        },
        uglify: {
            build: {
                files: {
                    'dist/js/app.js': 'src/js/app.js',
                    'dist/jasmine/lib/jasmine-2.1.2/boot.js': 'src/jasmine/lib/jasmine-2.1.2/boot.js',
                    'dist/jasmine/lib/jasmine-2.1.2/console.js': 'src/jasmine/lib/jasmine-2.1.2/console.js',
                    'dist/jasmine/lib/jasmine-2.1.2/jasmine.js': 'src/jasmine/lib/jasmine-2.1.2/jasmine.js',
                    'dist/jasmine/lib/jasmine-2.1.2/jasmine-html.js': 'src/jasmine/lib/jasmine-2.1.2/jasmine-html.js',
                    'dist/jasmine/spec/feedreader.js': 'src/jasmine/spec/feedreader.js',
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html', // 'destination': 'source'
                }
            }
        },
        copy: {
            icons: {
                files: [{
                    cwd: '',
                    src: ['src/jasmine/lib/jasmine-2.1.2/jasmine_favicon.png'],
                    dest: 'dist/jasmine/lib/jasmine-2.1.2/',
                    expand: true,
                    flatten: true
                }],
            },
            fonts: {
                files: [{
                    cwd: '',
                    src: ['src/fonts/*'],
                    dest: 'dist/fonts/',
                    expand: true,
                    flatten: true
                }],

            }
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'cssmin',
        'uglify',
        'htmlmin',
        'copy'

    ]);
};