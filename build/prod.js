const webpack=require('webpack');
const baseConfig=require('./webpack.config.js');
const merge=require('webpack-merge');
const devConfig=merge(baseConfig,{
    mode:'production',

});
const complier=webpack(devConfig);
complier.run(err =>{
    console.log(err);
    console.log('dsfsdfsdf');
})
