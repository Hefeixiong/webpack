const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode : 'development' ,
    entry : './src/index.js',
    output : {
        filename : '[name].[contenthash].js'
    },
    plugins : [new HtmlWebpackPlugin()]
};