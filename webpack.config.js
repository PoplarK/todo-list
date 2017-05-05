const path = require("path");

module.exports = {
  // entry: "./app/index.js",
  entry: {
    "index": "./app/index.js",
    // "vendor": ["react", "react-dom"]
  },
  output: {
    // filename: "index.js",
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "es2015"]
          }
        }
      }
    ]
  }
}