const path = require("path");

const getPath = ({ app, package }) => {
  try {
    return require.resolve(`./node_modules/${app}/node_modules/${package}`);
  } catch (err) {
    return require.resolve(`../../node_modules/${package}`);
  }
};

const entries = ({ app, dependencies }) =>
  Object.entries(dependencies).reduce(
    (entries, [package]) => ({
      ...entries,
      [package]: getPath({ app, package })
    }),
    {}
  );

const version = ({ dependencies, name }) =>
  dependencies[name].replace(/[^0-9\.]/g, "");

const output = ({ dependencies }) => ({
  path: path.resolve(__dirname, "../../", "build/lib"),
  filename: ({ chunk: { name } }) =>
    `[name]/[name]@${version({ dependencies, name })}.js`,
  libraryTarget: "umd",
  umdNamedDefine: true
});

const babel = () => ({
  test: /\.js$/,
  use: "babel-loader",
  exclude: /node_modules/
});

module.exports = {
  entries,
  output,
  babel
};
