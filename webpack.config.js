module.exports = {
  entry: './client/startup.js',
  output: {
    path: '/build',
    filename: 'bundle.js',
    publicPath: 'build/'
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
