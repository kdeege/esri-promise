const webpack = require('webpack');

module.exports = {
    entry: {
        index: [
            './src/index.ts'
        ],
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: 'esri-promise',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: 'awesome-typescript-loader' },
            { test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' },
        ]
    }
};