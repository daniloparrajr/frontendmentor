const path = require('path');

module.exports = {
    entry: {
        "main": path.resolve(__dirname, 'assets/src/js/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets/dist/js'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    }
};
