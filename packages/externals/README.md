# Externals package

The main idea of this package is building shared libraries between SPAs. It is like a `vendor.js` file splitted on a few chunks (react.js, lodash.js, etc).

If developers want to share React between SPAs they need to do:

- `npm install react -E`
- add react to `peerDependencies` section
- `lerna bootstrap --hoist`
- add react to `packages/main/src/packagemap.json`

#### What is `packagemap.json`? https://github.com/domenic/package-name-maps
