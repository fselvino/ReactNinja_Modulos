'use strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  status: { colors: true }
}).listen(3000, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log('Listening os http://localhost:3000')
})