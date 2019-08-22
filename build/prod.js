const webpack=require('webpack');
const path=require('path');
const baseConfig=require('./webpack.config.js');
const merge=require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const shouldUseSourceMap = false;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const extractCSS = new ExtractTextPlugin({
    filename: 'css/[name].[md5:contenthash:hex:8].css',
    allChunks: true
});
const extractSCSS = new ExtractTextPlugin({
    filename: 'css/[name].[md5:contenthash:hex:8].css',
    allChunks: true
});
const devConfig=merge(baseConfig,{
    mode:'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSCSS.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'

                    ],
                    fallback: "style-loader",
                }),
                include: path.resolve(__dirname,' ../../client')
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ['css-loader','postcss-loader'],
                    fallback: "style-loader",
                }),
                include:[
                    path.resolve(__dirname,' ../src')
                ]
            },
        ]
    },
    plugins: [
        extractCSS,
        extractSCSS,
        // css文件压缩
        new MiniCssExtractPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
    ],
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
                    drop_console: true,
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
            parallel: true,
            // Enable file caching
            cache: true,
            sourceMap: shouldUseSourceMap,
        }),
    ]
},

});
const complier=webpack(devConfig);
complier.run(err =>{
    console.log(err);
    console.log('dsfsdfsdf');
});
