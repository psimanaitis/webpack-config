const path = require('path');

module.exports = {
  entry: './2/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};