const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin          = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin       = require('browser-sync-webpack-plugin');


const VENDOR_LIBS = ['bootstrap'];
const BUNDLE_LIBS = ['./src/index.js'];


const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


 
const config = {
    
    entry: {
        bundle: BUNDLE_LIBS,
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: { limit: 40000}
                    },
                    {
                        loader : 'image-webpack-loader',
                        options: { bypassOnDebug: true }
                    }
                ]
            },
            {

                 test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                 use: [{
                   loader: 'file-loader',
                   options: {
                     name: 'fonts/[name].[ext]',
                     outputPath: '/',
                     publicPath: 'fonts'
                   }
                 }]

            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    
				  	use: ['css-loader', 'postcss-loader', 'sass-loader'],
                    
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          Tether: 'tether',
          Popper: ['popper.js', 'default']
        }),
        new BrowserSyncPlugin({
		    proxy: 'http://localhost:8888/',
		    port: 3000,
		    files: [
		        '**/*.php'
		    ],
		    ghostMode: {
		        clicks: false,
		        location: false,
		        forms: false,
		        scroll: false
		    },
		    injectChanges: true,
		    logFileChanges: true,
		    logLevel: 'debug',
		    logPrefix: 'wepback',
		    notify: true,
		    reloadDelay: 0
		}),
        new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor'
        }),

        new ExtractTextPlugin('styles.css')

    ]
    
};


//If true JS and CSS files will be minified
if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new UglifyJSPlugin(),
		new OptimizeCssAssetsPlugin()
	);
}


module.exports = config;

