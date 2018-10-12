import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "components";

const App = () => (
  <Router>
    <Header
      tabs={[{ label: "APP 1", to: "/app1" }, { label: "APP 2", to: "/app2" }]}
    />
  </Router>
);

export default App;
