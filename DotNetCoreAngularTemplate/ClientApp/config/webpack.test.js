const path = require("path");
const webpack = require('webpack');
const helpers = require('./helpers');

const CLIENT_DIR = "ClientApp/src";
const APP_DIR = "app";

const PATHS = {
    src: path.join(__dirname, '../src'),
    homeIndex: path.join(__dirname, '../../Views/Home')
};


module.exports = {
    devtool: 'inline-source-map',

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
                        options: { configFileName:  helpers.root(CLIENT_DIR, 'tsconfig.json') }
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            },
            {
                test: /\.scss$/,
                include: helpers.root(CLIENT_DIR, APP_DIR),
                loader: 'null-loader'
            },
            {
                test: /\.scss$/,
                exclude: helpers.root(CLIENT_DIR, APP_DIR),
                loader: 'null-loader'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        )
       /* new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root(path.join(__dirname, PATHS.src)), // location of your src
            {} // a map of your routes
        )*/
    ]
};




/*

const helpers = require('./helpers');
const path = require('path');

/**
 * Webpack Plugins
 #1#
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

/**
 * Webpack Constants
 #1#
const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 #1#
module.exports = function (options) {
    return {

        /**
         * Source map for Karma from the help of karma-sourcemap-loader &  karma-webpack
         *
         * Do not change, leave as is or it wont work.
         * See: https://github.com/webpack/karma-webpack#source-maps
         #1#
        devtool: 'inline-source-map',

        /**
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         #1#
        resolve: {

            /**
             * An array of extensions that should be used to resolve modules.
             *
             * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
             #1#
            extensions: ['.ts', '.js'],

            /**
             * Make sure root is Client
             #1#
            modules: [helpers.root('Client'), 'node_modules']

        },

        /**
         * Options affecting the normal modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#module
         *
         * 'use:' revered back to 'loader:' as a temp. workaround for #1188
         * See: https://github.com/AngularClass/angular2-webpack-starter/issues/1188#issuecomment-262872034
         #1#
        module: {

            rules: [

                /**
                 * Source map loader support for *.js files
                 * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
                 *
                 * See: https://github.com/webpack/source-map-loader
                 #1#
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    exclude: [
                        // these packages have problems with their sourcemaps
                        helpers.root('node_modules/rxjs'),
                        helpers.root('node_modules/@angular')
                    ]
                },
                {
                    test: /\.(scss|sass)$/,
                    exclude: /node_modules/,
                    loaders: ['raw-loader', 'sass-loader']
                },
                /**
                 * Typescript loader support for .ts and Angular 2 async routes via .async.ts
                 *
                 * See: https://github.com/s-panferov/awesome-typescript-loader
                 #1#
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            query: {
                                // use inline sourcemaps for "karma-remap-coverage" reporter
                                sourceMap: false,
                                inlineSourceMap: true,
                                compilerOptions: {

                                    // Remove TypeScript helpers to be injected
                                    // below by DefinePlugin
                                    removeComments: true

                                }
                            },
                        },
                        'angular2-template-loader'
                    ],
                    exclude: [/\.e2e\.ts$/]
                },

                /**
                 * Json loader support for *.json files.
                 *
                 * See: https://github.com/webpack/json-loader
                 #1#
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                    exclude: [helpers.root('Client/index.html')]
                },

                /**
                 * Raw loader support for *.css files
                 * Returns file content as string
                 *
                 * See: https://github.com/webpack/raw-loader
                 #1#
                {
                    test: /\.css$/,
                    loader: ['to-string-loader', 'css-loader'],
                    exclude: [helpers.root('Client/index.html')]
                },

                /**
                 * Raw loader support for *.html
                 * Returns file content as string
                 *
                 * See: https://github.com/webpack/raw-loader
                 #1#
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: [helpers.root('Client/index.html')]
                },

                /**
                 * Instruments JS files with Istanbul for subsequent code coverage reporting.
                 * Instrument only testing sources.
                 *
                 * See: https://github.com/deepsweet/istanbul-instrumenter-loader
                 #1#
                {
                    enforce: 'post',
                    test: /\.(js|ts)$/,
                    loader: 'istanbul-instrumenter-loader',
                    include: helpers.root('Client'),
                    exclude: [
                        /\.(e2e|spec)\.ts$/,
                        /node_modules/
                    ]
                }

            ]
        },

        /**
         * Add additional plugins to the compiler.
         *
         * See: http://webpack.github.io/docs/configuration.html#plugins
         #1#
        plugins: [

            /**
             * Plugin: DefinePlugin
             * Description: Define free variables.
             * Useful for having development builds with debug logging or adding global constants.
             *
             * Environment helpers
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
             #1#
            // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
            new DefinePlugin({
                'ENV': JSON.stringify(ENV),
                'HMR': false,
                'process.env': {
                    'ENV': JSON.stringify(ENV),
                    'NODE_ENV': JSON.stringify(ENV),
                    'HMR': false,
                }
            }),
            /**
                  * Plugin: ContextReplacementPlugin
                  * Description: Provides context to Angular's use of System.import
                  *
                  * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
                  * See: https://github.com/angular/angular/issues/11580
                  #1#
            new ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)@angular/,
                helpers.root('src'), // location of your src
                {
                    // your Angular Async Route paths relative to this root directory
                }
            ),
            /**
            * Plugin LoaderOptionsPlugin (experimental)
            *
            * See: https://gist.github.com/sokra/27b24881210b56bbaff7
            #1#
            new LoaderOptionsPlugin({
                debug: true,
                options: {

                }
            }),

        ],

        /**
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.github.io/docs/configuration.html#node
         #1#
        node: {
            global: true,
            process: false,
            crypto: 'empty',
            module: false,
            clearImmediate: false,
            setImmediate: false
        }

    };
}
*/
