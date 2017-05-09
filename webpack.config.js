var path=require('path')
var webpack=require('webpack')
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports= function (env) {
    return{
         entry:path.resolve(__dirname,"src/main.js"),
         output:{
             path: path.resolve(__dirname, 'dist'),
             filename: '[name].js',
         },
        devtool:'source-map',
        module:{
            rules:[
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader"
                        }
                    ]
                },
                // 2、处理在js中引用css文件
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        loader: "css-loader",
                        publicPath:"/dist"
                    })
                },

                // 处理图片操作  25000bit ~3kb
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: 'url-loader'
                },
                // 处理字体文件
                {
                    test: /\.(eot|woff|ttf|woff2|svg)$/,
                    use: 'url-loader'
                }
            ]
        },
        devServer: {
            // 指定启动服务的更目录
            contentBase: __dirname + '/src',
            // 指定端口号
            port: 8080,
            host: 'localhost',
            // 启用热更新
            hot: true,
            // 以下信息可有可无，为了完整
            inline: true,
            historyApiFallback: true,
            noInfo: false,
            // stats: 'minimal',
            // publicPath: publicPath
        },
        plugins:[

            new webpack.HotModuleReplacementPlugin(),
            // 删除文件夹的插件
            new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'}),
            new ExtractTextPlugin({
               filename: "bundle.css"
            }),
            // 自动生成html插件
            new HtmlWebpackPlugin({
                 filename:"index.html",
                template: path.resolve(__dirname,"src/index.html")
            }),

        ]

    }
}
