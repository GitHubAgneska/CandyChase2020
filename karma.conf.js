// karma.conf.js
var webpackConfig = require('./webpack.test.ts');
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs'
    }
});
require('./karma.conf.js');
module.exports = function (config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        /*         plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
        ], */

        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/unitTesting'),
            reports: [
                'html', 'lcovonly', 'text-summary'
            ],
            fixWebpackSourcePaths: true
        },

        autoWatch: true,
        browsers: [
            'Firefox', 'Chrome'
        ],
        customLaunchers: {
            ChromeHeadlessCI: {
            base: 'ChromeHeadless',
            flags: ['--no-sandbox']
        }},

        files: [
            {
                pattern: '../src/test.ts',
                watched: false,
                // pattern: './test-config/karma-test-shim.js',
                watched: false
            },
            // simple pattern to load the needed testfiles
            // equal to {pattern: 'test/unit/*.spec.js', watched: true, served: true, included: true}
            // './src/**/*.spec.ts'
            'CANDY_CHASE_2020_ionic/candyChase2020/src/pages/age-select/age-select.spec.ts'
        ],
        // plugins: [ 'karma-jasmine'],
        // plugins : [ 'karma-babel-preprocessor' ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './test-config/karma-test-shim.js': ['webpack'],
            './src/**/*.spec.ts': 'webpack'
        },

        // mime: {  'text/x-typescript': ['ts','tsx'] }, => An error was thrown in afterAll
        // Uncaught SyntaxError: Cannot use import statement outside a module

        webpack: webpackConfig,
        /* plugins: [new webpack.SourceMapDevToolPlugin(
                {filename: null, test: /\.(ts|tsx|js)($|\?)/i}
            )], */

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        }

    })

}
