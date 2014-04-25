module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nodeunit: {
            all: ['test.js']
        },

        benchmark: {
            all: {
                src: ['benchmark.js']
                // ,dest: 'benchmarkResults.csv'
            }
        },

        watch: {
            scripts: {
                files: ['**/*'],
                tasks: ['nodeunit']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-benchmark');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['nodeunit', 'benchmark']);
};
