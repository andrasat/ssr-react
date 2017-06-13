const path = require('path')
const nodeExt = require('webpack-node-externals')

module.exports = {
  name: 'Server Side React',
  entry: './app/SSR.js',
  output: {
    path: path.join(__dirname, '.', 'dist', 'assets'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath: '/assets/'
  },
  target: 'node',
  externals: nodeExt(),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '.', 'app'),
        exclude: path.join(__dirname, '.', 'node_modules')
      }
    ]
  }
}