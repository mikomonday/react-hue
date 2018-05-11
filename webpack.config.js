path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist');

// npm run build --env=development
function webpackConfig(env) {
  switch (env) {
    case 'production':
      return {};

    case 'development':
      return {
        devtool: 'inline-source-map',
        plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new CleanWebpackPlugin(['dist']),
          new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './dist/index.html',
          })
        ],
        entry: [
          './src/index.js',
          'webpack-hot-middleware/client',
        ],
        output: {
          filename: 'bundle.js',
          path: __dirname + './dist',
          publicPath: '/',
        },
        resolve: {
          extensions: ['*', '.js', '.jsx']
        },
        module: {
          rules: [{
            test: /\.html$/,
            use: [{
              loader: 'html-loader',
              options: { minimize: true }
            }]
          }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }]
        }
      };
    default:
      console.log('"env" parameter required. please specify "production" or "development"');
      break;
  }
}

module.exports = webpackConfig;
