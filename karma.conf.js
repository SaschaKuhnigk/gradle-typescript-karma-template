module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine','requirejs'],
        browsers: ['PhantomJS', 'Chrome'],
        logLevel: config.LOG_DEBUG,
        protocol: 'http',
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-requirejs'
        ],
        port: 9876,
        autoWatch: true,

        files: [
            {pattern: './build/generated-source/**/*.js', included: false},
            {pattern: './build/generated-source/**/*.js.map', included: false},
            'src/test/ts/test-main.js'
        ],
        preprocessors: {
            './build/generated-source/**/ts/*.js': ['sourcemap']
        }
    });
};