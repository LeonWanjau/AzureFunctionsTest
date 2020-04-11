const path = require('path');

module.exports = {
    entry: {
        test: ['./static/test2/js/index.js']
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
                test: /\.scss/,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    'sass-loader'
                ]
            },
            /*
            {
                test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: "../fonts/webfonts",
                            name: "[name].[ext]",
                            publicPath: "/cv-1/public/fonts/webfonts"
                        }
                    }
                ]
            },
            */
           {
            test: /\.(woff|woff2|ttf|jpg)$/,
            use: {
              loader: 'url-loader',
            },
          },
        ]
    },

    mode: "development",
    devtool: 'cheap-module-eval-source-map'
}