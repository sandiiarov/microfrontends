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

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const App = () => (
  <Router>
    <div style={{ padding: 20 }}>
      <Example />
      <Switch>
        <Redirect exact from="/app1" to="/app1/1" />
      </Switch>
      <Route path="/app1/:page" component={Menu} />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/app1/1" component={() => <Page1 />} />
        <Route exact path="/app1/2" component={() => <Page2 />} />
      </React.Suspense>
    </div>
  </Router>
);

export default hot(module)(App);
