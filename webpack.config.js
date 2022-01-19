const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.export=
{
    target:'web',
    devServer:{
        open:true,
        hot:false,
        port:5050,
        liveReload:true,
        onListening: function (devServer) {
            if (!devServer) {
                throw new Error('Webpack-dev-server is not defined');
            }

            const port = devServer.server.address().port;
            console.log('Listenint on port: ', port);
        },
        
    }
}