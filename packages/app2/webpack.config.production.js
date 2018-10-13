const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { version } = require("./package.json");
const { output, babel, manifest } = require("./webpack.config.common");

const VERSIONS = [version, "latest"];

module.exports = VERSIONS.map(ver => ({
  entry: "./src/index.js",
  output: output(ver),
  module: { rules: [babel()] },
  plugins: [new PeerDepsExternalsPlugin(), new ManifestPlugin(manifest)]
}));
