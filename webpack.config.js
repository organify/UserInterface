const path = require('path');

module.exports = {
  entry: './js/bigchain/bigchainMain.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};