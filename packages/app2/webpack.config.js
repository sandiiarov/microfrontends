const path = require("path");
const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");
const { name, version: ver } = require("./package.json");

const version = process.env.NODE_ENV === "development" ? "dev" : ver;

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: `/packages/${name}/${version}`,
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../../build/packages/", name, version),
    libraryTarget: "amd"
  },
  devServer: {
    publicPath: `/${version}`
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
