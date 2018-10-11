const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    react: "../../node_modules/react",
    "react-dom": "../../node_modules/react-dom",
    "single-spa-react": "../../node_modules/single-spa-react",
    components: "./node_modules/components"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    CopyWebpackPlugin([
      {
        from: "../../node_modules/systemjs/dist/system.min.js",
        to: "system.js"
      },
      {
        from: "../../node_modules/systemjs/dist/extras/amd.min.js",
        to: "amd.js"
      }
    ])
  ]
};
