const mix = require('laravel-mix');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');


/*
mix.js('resources/js/app.js',  'public/js')
    .react()
    .sass('resources/sass/app.scss','public/css')
 */
mix.sass('resources/sass/app.scss','public/css')
    .react()
    


mix.babelConfig({
    presets: ["@babel/env","@babel/preset-react"]
});



mix.webpackConfig({
    entry:'./resources/js/app.js',
    mode: 'development',

    output:{
        path:path.resolve(__dirname,"public/dist/js"),
        publicPath: '/dist/',
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
            }
        ]
    },
    resolve:{extensions: ["*", ".js", ".jsx", ".css",".scss"] },
    target:'web',
    devServer:{
        open:true,
        hot:true,
        port:8000,
        static:
        {directory: path.join(__dirname,"resources/public/dist/")},
       proxy: {
           '/': 'http://127.0.0.1:8000'
       }
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
mix.browserSync({
    notify:false,
    proxy: 'http://127.0.0.1:8000',
    open:'external'

});
*/