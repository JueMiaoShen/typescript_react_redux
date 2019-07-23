const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
module.exports={
    entry:{
        app:path.resolve(__dirname,'../src/index.tsx'),
    },
    output: {
        publicPath:'/',
        path: path.resolve(__dirname,'../dist'),
        filename: "main.js"
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'test',
            filename: 'index.html',
            template:'./build/index.html',
            chunks: ["app"], // entry中的app入口才会被打包
            hash:true,
            minify:{
                removeComments:true //是否压缩时 去除注释
            }
        }),
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin({
            filename: "css/[name].css",//都提到build目录下的css目录中
            chunkFilename: "[id].css"
        })
    ]


}
