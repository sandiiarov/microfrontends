const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");
const { entries, output, babel } = require("./webpack.config.common");

module.exports = {
  entry: entries({ current: ["components"] }),
  output: output(),
  module: { rules: [babel()] },
  plugins: [new PeerDepsExternalsPlugin()]
};
