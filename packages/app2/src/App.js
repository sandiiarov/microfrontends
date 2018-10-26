import React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Menu from "./Menu";

console.log(React.version);

const Page1 = React.lazy(() => import("./Page1"));
const Page2 = React.lazy(() => import("./Page2"));

const App = () => (
  <Router>
    <div style={{ padding: 20 }}>
      <Switch>
        <Redirect exact from="/app2" to="/app2/1" />
      </Switch>
      <Route path="/app2/:page" component={Menu} />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/app2/1" component={() => <Page1 />} />
        <Route exact path="/app2/2" component={() => <Page2 />} />
      </React.Suspense>
    </div>
  </Router>
);

export default hot(module)(App);
