// __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
// path是node.js中提供的处理文件路径的小工具。 (http://www.runoob.com/nodejs/nodejs-path-module.html)
const path = require('path');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('hot-module-replacement');


const PATH_NODE_MODULES = path.resolve(__dirname, 'node_modules');

module.exports = {
    // 项目入口，webpack从此处开始构建
    entry: {
        main: path.join(__dirname, 'src/index.js'), // 指定入口，可以指定多个。参考webpack文档
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '/',
        filename: "js/[name]-[hash]" + ".js",
        chunkFilename: "js/[name]-[hash]" + ".js",
    },
    devServer: {
        // contentBase: path.join(__dirname, ""),
        contentBase: false, //since we use CopyWebpackPlugin.
        clientLogLevel: 'warning',
        publicPath: '/',
        hot: true,
        progress: true,
        overlay: { warnings: false, errors: false },
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join('/', 'index.html') },
            ],
        },
        // historyApiFallback: true,
        // quiet: true, // necessary for FriendlyErrorsPlugin
        compress: true,
        inline: true,
        port: 8083,
        disableHostCheck: true,
        host: '127.0.0.1',
        watchOptions: {
            poll: false,
        }
    },
    devtool: 'cheap-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'eslint-loader', // 指定启用eslint-loader
                        options: {
                            formatter: require('eslint-friendly-formatter'),
                            emitWarning: false,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:7].[ext]'
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                },
            },
        ],
    },
    // 重命名
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.jsx'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            filename: 'index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/static'),
                to: 'static',
                ignore: ['.*'],
            },
        ]),
        new webpack.HotModuleReplacementPlugin(),
    ],
}