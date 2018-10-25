const path = require("path");
const { dependencies } = require("./package.json");

const entries = ({ current = [] }) =>
  Object.entries(dependencies).reduce(
    (entries, [name]) => ({
      ...entries,
      [name]: path.resolve(
        __dirname,
        current.includes(name) ? "./" : "../../",
        "node_modules",
        name
      )
    }),
    {}
  );

const version = name => dependencies[name].replace(/[^0-9\.]/g, "");

const output = () => ({
  path: path.resolve(__dirname, "../../", "build/lib"),
  filename: ({ chunk: { name } }) => `[name]/[name]@${version(name)}.js`,
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
