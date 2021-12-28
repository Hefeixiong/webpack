const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const loader = require('sass-loader');

module.exports = {
    mode : 'development' ,
    entry : './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
      },
    output : {
        filename : 'index.[contenthash].js'
    },
    plugins : [
        new HtmlWebpackPlugin({
        title : 'My html' ,
        template: './src/assets/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false
      })
    ],
    module : {
        rules : [
            {
                test : /\.css$/i,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../',
                                hmr: process.env.NODE_ENV === 'development'
                            },
                        }, 
                    'css-loader',
                 ]
                // use : ['style-loader' , 'css-loader'],
            },
        ],
    },
};  