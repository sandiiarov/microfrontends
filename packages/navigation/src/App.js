import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { AppBar } from "components";
import Menu from "./Menu";

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Redirect exact from="/" to="/app1" />
      </Switch>
      <AppBar position="static" color="default">
        <Route path="/" component={Menu} />
      </AppBar>
    </React.Fragment>
  </Router>
);

export default App;
