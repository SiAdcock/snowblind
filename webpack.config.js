module.exports = {
  entry: './client/index.js',
  output: {
    path: '/build',
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolveLoader: {
    root: __dirname + '/node_modules'
  }
};
