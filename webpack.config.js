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
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false
      })
    ],
    module : {
        rules : [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //将JS字符串生成为style节点
                    'style-loader',
                    //将css转化为Common JS模块
                    'css-loader',
                    //将sass编译成css
                    {
                        loader: 'sass-loader',
                        options: {
                            //dart-sass是首选
                            implementation: require('dart-sass')
                        }
                    },
                ]
                // test : /\.css$/i,
                // use: [
                //         {
                //             loader: MiniCssExtractPlugin.loader,
                //             options: {
                //                 publicPath: '../',
                //                 hmr: process.env.NODE_ENV === 'development'
                //             },
                //         }, 
                //     'css-loader',
                //  ]
                // use : ['style-loader' , 'css-loader'],
            },
        ],
    },
};  