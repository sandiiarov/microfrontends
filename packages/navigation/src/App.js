import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar } from "components";
import Menu from "./Menu";

const App = () => (
  <Router>
    <AppBar position="static" color="default">
      <Route path="/" component={Menu} />
    </AppBar>
  </Router>
);

export default App;
