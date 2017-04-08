const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

const CLIENT_DIR = "ClientApp/src";
const APP_DIR = "app";

const PATHS = {
    src: path.join(__dirname, '../src'),
    homeIndex: path.join(__dirname, '../../Views/Home')
};


module.exports = {
    entry: {
        'polyfills': path.join(PATHS.src, 'polyfills.ts'),
        'vendor': path.join(PATHS.src, 'vendor.ts'),
        'app': path.join(PATHS.src, 'main.ts')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: helpers.root('src', 'tsconfig.json') }
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root(CLIENT_DIR, APP_DIR),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            {
                test: /\.css$/,
                include: helpers.root(CLIENT_DIR, APP_DIR),
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root(path.join(__dirname, PATHS.src)), // location of your src
            {} // a map of your routes
        ),

        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', Tether: 'tether' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        new webpack.IgnorePlugin(/^vertx$/), // Workaround for https://github.com/stefanpenner/es6-promise/issues/100

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            inject: true,
            filename: PATHS.homeIndex + '/index.cshtml', 
            template: PATHS.src + '/index.html'
        })
    ]
};

