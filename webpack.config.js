const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist');

module.exports = {
    entry: path.resolve(SRC_DIR, './app.js'),
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            minify: false,
            inject: false,
            cachebuster: Date.now()
        })
    ],
    devServer: {
        contentBase: './dist',
        compress: true,
        host: '0.0.0.0',
        port: 8000
    }
}
