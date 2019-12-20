const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const isDev = true;
module.exports = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval' : 'source-map',
    devServer: {
        contentBase: './',
    },
    entry: './src/index.js',
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname,'dist'),
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" },
            {
                test: [/.css$/],
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};