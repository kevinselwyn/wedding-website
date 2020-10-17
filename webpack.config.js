const path = require('path');

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
    devServer: {
        contentBase: './dist',
        compress: true,
        host: '0.0.0.0',
        port: 8000
    }
}
