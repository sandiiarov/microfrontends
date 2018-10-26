const { entries, output, babel } = require("./webpack.config.common");
const { dependencies } = require("./package.json");

module.exports = Object.keys(dependencies).map(app => {
  const { peerDependencies } = require(`./node_modules/${app}/package.json`);

  return {
    entry: entries({ app, dependencies: peerDependencies }),
    output: output({ dependencies: peerDependencies }),
    module: { rules: [babel()] },
    externals: Object.keys(peerDependencies)
  };
});
