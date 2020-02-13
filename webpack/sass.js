const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: [/node_modules/],
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true
                            }
                        },
                            'resolve-url-loader',
                            'sass-loader',
                            'font-loader'
                        ]
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
                    filename:  (getPath) => {
                        return getPath('../css/[name].css').replace('css/js', 'css');
                    }
                }
            )
        ]
    };
};