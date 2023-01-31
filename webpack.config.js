const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },
    output: {
    filename: 'main.js',
    plugins: [
        new HtmlWebpackPlugin({
         title: 'Development',
        }),
      ],
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
      optimization: {
        runtimeChunk: 'single',
      },
},
};