const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { version } = require("./package.json");
const { output, babel, manifest } = require("./webpack.config.common");

module.exports = [
  {
    entry: "./src/index.js",
    output: output(version),
    module: {
      rules: [babel()]
    },
    plugins: [new PeerDepsExternalsPlugin(), new ManifestPlugin(manifest)]
  },
  {
    entry: "./src/index.js",
    output: output("latest"),
    module: {
      rules: [babel()]
    },
    plugins: [new PeerDepsExternalsPlugin(), new ManifestPlugin(manifest)]
  }
];
