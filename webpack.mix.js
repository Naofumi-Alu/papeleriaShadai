const mix = require('laravel-mix');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

mix.babelConfig({
    presets: ["@babel/env","@babel/preset-react"]
});



mix.webpackConfig({
    entry:'./resources/js/app.js',
    mode: 'development',

    output:{
        path:path.resolve(__dirname,"resources/views/"),
        publicPath: '/views/',
        filename:'bundle.js'
    }, 
    
    plugins:[
        new HtmlWebpackPlugin(
            {
                title:'My App',
                template:'./resources/views/welcome.html',
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename:'bundle.css'
            },
            ),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {   
                test:/\.(js|jsx)$/,
                exclude:/(node_modules|bower_components)/,
                use:[
                    {loader: 'babel-loader',options:{presets:["@babel/preset-react","@babel/env"]}}
                ],
            },
            {
                test:/\.scss$/,
                use:[
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ],
            }
        ]
    },
    resolve:{extensions: ["*", ".js", ".jsx", ".css",".scss"] },
    target:'web',
    devServer:{
        open:true,
       // hot:false,
        port:5050,
        contentBase: path.join(__dirname,"resources/views/"),
        publicPath: "http://127.0.0.1:5050/views/",
        hotOnly:true
    }
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
/*
mix.js('resources/js/app.js',  'public/js')
    .react()
    .sass('resources/sass/app.scss','public/css')
 */   
/*
mix.browserSync({
    notify:false,
    proxy: 'http://127.0.0.1:8000',
    open:'external'

});
*/