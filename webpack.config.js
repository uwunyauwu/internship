var path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 1234,
  },
};
