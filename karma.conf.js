// karma.conf.js
require('ts-node').register({ 
compilerOptions: { 
    module: 'commonjs' 
} 
});
require('./karma.conf.js');
module.exports = function(config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],

        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/unitTesting'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },

        autoWatch: true,
        browsers: [
            'Firefox', 'Chrome'
        ],
        files: [
            // simple pattern to load the needed testfiles
            // equal to {pattern: 'test/unit/*.spec.js', watched: true, served: true, included: true}

            'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js',
            // './src/**/*.spec.ts'
            'CANDY_CHASE_2020_ionic/candyChase2020/src/pages/age-select/age-select.spec.ts'
        ],
        // plugins: [ 'karma-jasmine'],
        // plugins : [ 'karma-babel-preprocessor' ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './src/**/*.spec.ts': 'babel'
        },

        babelPreprocessor: {
            options: {
                presets: ['@babel/preset-env']
            }
        }
    })
}
