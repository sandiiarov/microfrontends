const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { output, babel, manifest } = require("./webpack.config.common");

module.exports = {
  entry: "./src/index.js",
  output: output("latest"),
  devServer: {
    publicPath: "/latest"
  },
  module: {
    rules: [babel()]
  },
  plugins: [new PeerDepsExternalsPlugin(), new ManifestPlugin(manifest)]
};
