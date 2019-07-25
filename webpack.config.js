const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },{
            test: /\.jpeg|jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 90000,
                }
            },{
                loader:'file-loader',
                options:{
                    name:'[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Inmotion',
            template: path.resolve(__dirname, 'src/index.html')
        })
    ],
    devServer: {
        open:true
    }
}