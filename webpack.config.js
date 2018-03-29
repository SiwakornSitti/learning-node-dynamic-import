const path = require('path');


module.exports = {
    mode: 'production',
    target: 'node',
    entry:  path.resolve(__dirname, 'index.js'),
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx?)$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                },
            },
        ],
    }
};
