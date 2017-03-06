var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var yargs = require('yargs');

var libraryName = 'dashboards',
    plugins = [],
    outputFile;

if (yargs.argv.p) {
    // plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}
module.exports = [{
    entry: './src/main.ts',
    output: {
        // filename: 'main.js',
        path: 'serve',
        publicPath: '/',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: '/mode_modules/'
            }
            , {
                test: /\.pug$/,
                use: `pug-html-loader?basedir=${__dirname}`
            }, {
                test: /\.css$/,
                use: [
                    'css-to-string-loader',
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.styl$/,
                use: [
                    'css-to-string-loader',
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }, {
                test: /\.html$/,
                use: 'html-loader'
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'file-loader'
            }, {
                test: /\.svg$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })],
    devServer: {
        inline: true,
        historyApiFallback: true
    }
}]