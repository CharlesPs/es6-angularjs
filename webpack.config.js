const path = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', "./src/index.js"],
    mode: "development",
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devtool: "source-map",
    devServer: {
        contentBase: "dist"
    },
    module: {
        rules: [
            { 
                test: /\.styl$/, 
                loader: 'style-loader!css-loader!stylus-loader' 
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new WriteFilePlugin(),
        new CopyWebpackPlugin(
            [
                {
                    from: "./src/components/",
                    to: "./tpl/[name].[ext]",
                    toType: 'template',
                    ignore: [ '*.js', '*.styl' ],
                    force: true
                }
            ], 
            {
                debug: true,
                copyUnmodified: true
            }
        )
    ]
}