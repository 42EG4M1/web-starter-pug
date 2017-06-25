const path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src/js/main.js'),
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].min.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
