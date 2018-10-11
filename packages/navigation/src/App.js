import React from "react";
import { navigateToUrl } from "single-spa";

const App = () => (
  <div>
    <button onClick={() => navigateToUrl("/app1")} width={100} bg="magenta">
      APP1
    </button>
    <button onClick={() => navigateToUrl("/app2")} width={100} bg="blue">
      APP2
    </button>
  </div>
);

export default App;
