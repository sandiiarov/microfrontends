import React from "react";
import { Tabs, Tab } from "components";

const Menu = ({ location: { pathname }, history }) => (
  <Tabs value={pathname === "/app2" ? 1 : 0}>
    <Tab
      label="APP 1"
      disabled={pathname === "/app1"}
      onClick={() => history.push("/app1")}
    />
    <Tab
      label="APP 2"
      disabled={pathname === "/app2"}
      onClick={() => history.push("/app2")}
    />
  </Tabs>
);

export default Menu;
