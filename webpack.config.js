const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

function webpackConfig(env) {
  switch (env) {
    case 'production':
      return {};

    case 'development':
      return {
        mode: 'development',
        devtool: 'inline-source-map',
        plugins: [
          new CleanWebpackPlugin(['dist']),
          new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
          }),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
        ],
        entry: [
          'webpack-hot-middleware/client',
          path.join(__dirname, 'src', 'index.jsx'),
        ],
        output: {
          filename: 'bundle.js',
          path: path.join(__dirname, 'dist'),
          publicPath: '/',
        },
        resolve: {
          extensions: ['*', '.js', '.jsx'],
        },
        module: {
          rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          }],
        },
      };
    default:
      return null;
  }
}

module.exports = webpackConfig;
