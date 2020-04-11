const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        test: ['./js/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'static/test2/js/deploy'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
           {
            test: /\.(woff|woff2|ttf|jpg)$/,
            use: {
              loader: 'url-loader',
            },
          },
        ]
    },

    plugins: [
        new CleanWebpackPlugin()
    ]
}