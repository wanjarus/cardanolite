const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './test/test.js',
  output: {
    filename: 'cardano.bundle.test.js',
    libraryTarget: 'var',
    library: 'CardanoTest',
    path: `${__dirname}/test/browser/js`,
  },
  node: {
    fs: 'empty',
  },
  plugins: [new Dotenv()],
  mode: 'development',
}
