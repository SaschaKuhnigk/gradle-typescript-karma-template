module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS', 'Chrome'],
        logLevel: config.LOG_DEBUG,
        protocol: 'http',
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-sourcemap-loader'
        ],
        port: 9876,
        autoWatch: true,

        files: [
            {pattern: './build/generated-source/**/*.js', included: true},
            {pattern: './build/generated-source/**/*.js.map', included: false}
        ],
        preprocessors: {
            './build/generated-source/**/ts/*.js': ['sourcemap']
        }
    });
};