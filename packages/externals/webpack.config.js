const path = require("path");
const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");
const { dependencies } = require("./package.json");

const modules = path.resolve(__dirname, "../../node_modules");
const version = name => dependencies[name].replace(/[^0-9\.]/g, "");

module.exports = {
  entry: {
    react: path.resolve(modules, "react"),
    "react-dom": path.resolve(modules, "react-dom"),
    "single-spa-react": path.resolve(modules, "single-spa-react"),
    "react-router-dom": path.resolve(modules, "react-router-dom"),
    components: "./node_modules/components"
  },
  output: {
    path: path.resolve(__dirname, "../../", "build/lib"),
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
  plugins: [new PeerDepsExternalsPlugin()]
};
