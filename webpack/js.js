const webpack = require('webpack');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/, // Check for all js files
                    exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
                    loader: 'babel-loader'
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                slick: "slick-carousel",
                fancybox: "fancybox",
                countdown: "jquery-countdown",
                slideout: "slideout",
                popper: "popper",
                ethereumjsaccounts: "ethereumjs-account",
                overlayScrollbars: "overlayscrollbars",
                rangeslider: "rangeslider.js",
            })
        ]
    }
};