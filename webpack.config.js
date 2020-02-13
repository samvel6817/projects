const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const sass = require('./webpack/sass');
const js = require('./webpack/js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
   source: path.join(__dirname, ''),
   buildVue: path.join(__dirname, 'assets/js')
};

const common = merge([
    {
        entry:{
            'main': PATHS.source + '/webpack/main.js',
        },
        output: {
            path: path.resolve(__dirname, "assets/js"),
            filename: '[name].js'
        }
    }
]);


module.exports = function() {

        return merge([
            common,
            sass(__dirname),
            js()
        ])
};