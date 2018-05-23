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

  // Fallback when no previous route was matched
  app.use('*', (req, res) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'src', 'index.html'));
  });
}

// Serve files on port
app.listen(port, () => console.log(`React-Hue launched on port ${port}`));

