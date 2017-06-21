const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    contest: path.join(__dirname, 'src'),
    entry: {
        build: path.resolve(APP_PATH, 'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['','.js','.jsx','.styl']
    },
    postcss: [
        autoprefixer
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                // loader: ['style', 'css', 'postcss']
                loader: 'style!css?!postcss'
            },
            {
                test: /\.scss$/,
                // loader: ['style', 'css', 'postcss', 'sass'],
                loader: 'style!css!sass',
                include: __dirname
            }
        ]
    }
};