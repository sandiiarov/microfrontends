import React from "react";
import { navigateToUrl } from "single-spa";
import { Button } from "components";

const App = () => (
  <div>
    <Button onClick={() => navigateToUrl("/app1")} width={100} bg="magenta">
      APP1
    </Button>
    <Button onClick={() => navigateToUrl("/app2")} width={100} bg="blue">
      APP2
    </Button>
  </div>
);

export default App;
