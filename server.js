/* eslint-disable no-console, import/no-extraneous-dependencies */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

// Express
const app = express();

// Webpack Dev Server Checks
if (env === 'development') {
  console.log('Starting in development mode...');
  const devConfig = webpackConfig('development');
  const compiler = webpack(devConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: devConfig.output.publicPath,
    stats: { colors: true },
  }));
  app.use(webpackHotMiddleware(compiler));
}

// Serve index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Serve files on port
app.listen(port, () => console.log(`React-Hue launched on port ${port}`));

