const express=require('express');
const webpack=require('webpack');
const baseConfig=require('./webpack.config.js');
const merge=require('webpack-merge');
const webpackDevMiddleware = require("webpack-dev-middleware")
const devConfig=merge(baseConfig,{
    mode:'development',

});
const complier=webpack(devConfig);
const app=express();
app.use(
    webpackDevMiddleware(complier,{
        // 这里是对 webpackDevMiddleware 的一些配置，具体其他配置我们下面已经列出来了。
        //绑定中间件的公共路径,与webpack配置的路径相同
        publicPath: '/',
        quiet: true  //向控制台显示任何内容
    })
)

//app.use(require("webpack-hot-middleware")(complier));

// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
app.use(express.static(require('path').resolve(__dirname,'../public')));
app.listen(8001,()=>{
    console.log('dev server listen on 8001')
})
