const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        // относительный путь в браузере, работает без папки дист
        publicPath: "dist/"
    },
    devServer: {
        //Show error in the browser screen
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                //Если старый стандарт, то не надо его прогонять через бабл
                //exclude:"/node_modules/"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    config.devtool = production ? false : 'eval-sourcemap';

    return config;
};