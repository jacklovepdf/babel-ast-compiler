const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        options: {
            presets: ["env",'stage-0'],
            plugins: [
                ["jack", { "library":"lodash"}]
            ]
        }
      }
    ]
  },
  mode: 'production'
};