import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Header = ({ tabs, location: { pathname }, history }) => {
  const value = tabs.findIndex(({ to }) => pathname.includes(to));

  return (
    <AppBar position="static" color="default">
      <Tabs value={value}>
        {tabs.map(({ label, to }, index) => (
          <Tab
            key={label}
            label={label}
            onClick={() => history.push(to)}
            disabled={value === index}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withRouter(Header);
