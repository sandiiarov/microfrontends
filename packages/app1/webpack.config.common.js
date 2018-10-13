const path = require("path");
const { name } = require("./package.json");

const build = path.resolve(__dirname, "../../build", "packages", name);

const output = version => ({
  publicPath: `/packages/${name}/${version}/`,
  filename: "main.[hash].js",
  chunkFilename: "[name].[contenthash].js",
  path: path.resolve(build, version),
  libraryTarget: "amd"
});

const babel = () => ({
  test: /\.js$/,
  use: "babel-loader",
  exclude: /node_modules/
});

const manifest = {
  publicPath: "",
  generate: (seed, files) =>
    files.reduce(
      (manifest, { name, path }) => ({
        ...manifest,
        [name.replace(/(?=\.).*/, "")]: path
      }),
      seed
    )
};

module.exports = {
  output,
  babel,
  manifest
};
