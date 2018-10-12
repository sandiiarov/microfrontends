import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  suppressComponentDidCatchWarning: true,
  domElementGetter: () => document.getElementById("app2")
});
