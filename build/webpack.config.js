const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
        })
    ]


}
