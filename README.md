# Containerized Build

The goal of this project is to provide an example of how to build app which consists of multiple single page applications (SPA's).

Each SPA should be self contained with its own build process. It should be individually deployable without the need to deploy the whole application if there are changes to any individual app.

- [x] Isolate SPA's with their own build process
- [x] Load SPA's on demand with SystemJS and Single-Spa
- [x] Share common packages dynamicly bettwen SPAs
- [x] Scope different virsions of common pakcages to SPAs
- [x] On the fly choosing of SPA versions
- [x] In dev mode each SPA runs on it's own port with one proxy that hanlde all the redirecting
- [x] Don't need to run all SPAs to work on one
- [x] Share dev dependencies between all packages
- [x] Use Externals package to build common packages to share dynamicly between SPAs
- [x] Hot module reloading for new SPAs (See APP1)
- [ ] Dynamic imports

This example is based here https://build-dqtmjjrowf.now.sh

## How to run this project in development mode

Clone the repository and install dependencies:

```sh
git clone git@github.com:sandiiarov/containerized_build.git
cd containerized_build
lerna bootstrap
```

Jump into `main`, `externals`, `app1`, `app2`, `navigation` packages:

```sh
npm start
```

Open up http://localhost:9000 in a web browser.

## How to run this project in production mode

```sh
lerna bootstrap
```

Jump into the build folder:

```sh
npx http-server-spa /
```

Open up http://localhost:8080 in a web browser.

## How to bump version of SPA

Jump into any of `app1`, `app2`, `navigation` packages.

```sh
npm version patch
npm run build
```

Open build/versions.json file and change version of package.

# Packages

## main

Main package is the root entry point of the whole application. Main package defines when to use each of SPAs.

Main app also has webpack config which is proxing to SPAs in development mode.

## app1, app2, navigation

These guys are just apps or SPAs.

## components

UI components lib

## externals

This package builds all extenals packages (React, React-dom, Components, etc).

Then those packages is shared between SPAs via SystemJS `packagemap.json`.
