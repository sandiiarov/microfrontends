import React from "react";
import { Button } from "components";

const Menu = ({ match, history }) => (
  <React.Fragment>
    <Button
      disabled={match.params.page === "1"}
      size="large"
      onClick={() => history.push("/app1/1")}
    >
      Page 1
    </Button>
    <Button
      disabled={match.params.page === "2"}
      size="large"
      onClick={() => history.push("/app1/2")}
    >
      Page 2
    </Button>
  </React.Fragment>
);

export default Menu;
