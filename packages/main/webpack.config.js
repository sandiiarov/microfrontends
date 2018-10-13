const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../../", "build")
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/packages/navigation": {
        target: "http://localhost:9010",
        pathRewrite: { "^/packages/navigation": "" }
      },
      "/packages/app1": {
        target: "http://localhost:9001",
        pathRewrite: { "^/packages/app1": "" }
      },
      "/packages/app2": {
        target: "http://localhost:9002",
        pathRewrite: { "^/packages/app2": "" }
      }
    }
  },
  module: {
    rules: [
      {
        parser: {
          system: false
        }
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    CopyWebpackPlugin([
      { from: "src/index.html", to: "index.html" },
      { from: "src/packagemap.json", to: "packagemap.json" },
      {
        from: "../../node_modules/systemjs/dist/system.min.js",
        to: "lib/system.js"
      },
      {
        from: "../../node_modules/systemjs/dist/extras/amd.min.js",
        to: "lib/amd.js"
      },
      { from: "node_modules/externals/lib", to: "lib" }
    ])
  ]
};
