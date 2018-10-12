import React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import loadable from "loadable-components";
import Menu from "./Menu";

const Page1 = loadable(() => import("./Page1"));
const Page2 = loadable(() => import("./Page2"));

const App = () => (
  <Router>
    <div style={{ padding: 20 }}>
      <Switch>
        <Redirect exact from="/app1" to="/app1/1" />
      </Switch>
      <Route path="/app1/:page" component={Menu} />
      <Route exact path="/app1/1" component={Page1} />
      <Route exact path="/app1/2" component={Page2} />
    </div>
  </Router>
);

export default hot(module)(App);
