const webpack=require('webpack');
const baseConfig=require('./webpack.config.js');
const merge=require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
const shouldUseSourceMap=false;
const devConfig=merge(baseConfig,{
    mode:'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        // we want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        // https://github.com/facebook/create-react-app/pull/4234
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                        drop_console: true,//删除console.log
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                },
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                // parallel: true,
                // Enable file caching
                // cache: true,
                sourceMap: shouldUseSourceMap,
            }),
        ],
    },
});
const complier=webpack(devConfig);
// complier.watch({},(data)=>{
//     console.log("123123",data);
// })
complier.run((err,stats)=>{
    console.log(err);
    console.log(stats);
    console.log('dsfsdfsdf');
})
