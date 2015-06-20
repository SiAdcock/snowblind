
module.exports = {
  context: './app',
  entry: './modules/index.js',
  output: {
    path: '/build',
    filename: 'bundle.js',
    publicPath: '/build'
  }
};
