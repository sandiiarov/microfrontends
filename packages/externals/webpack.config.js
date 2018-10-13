const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { dependencies } = require("./package.json");

const lib = path.resolve(__dirname, "lib");
const systemjs = path.resolve(__dirname, "../../node_modules/systemjs/dist");
const version = name => dependencies[name].replace(/[^0-9\.]/g, "");

module.exports = {
  entry: {
    react: "../../node_modules/react",
    "react-dom": "../../node_modules/react-dom",
    "single-spa-react": "../../node_modules/single-spa-react",
    "react-router-dom": "../../node_modules/react-router-dom",
    "loadable-components": "../../node_modules/loadable-components",
    components: "./node_modules/components"
  },
  output: {
    path: lib,
    filename: ({ chunk: { name } }) => `[name]/[name]@${version(name)}.js`,
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
        from: path.resolve(systemjs, "system.min.js"),
        to: `systemjs/system@${version("systemjs")}.js`
      },
      {
        from: path.resolve(systemjs, "extras", "amd.min.js"),
        to: `systemjs/amd@${version("systemjs")}.js`
      }
    ])
  ]
};
