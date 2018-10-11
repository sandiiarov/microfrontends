import React from "react";
import { hot } from "react-hot-loader";
import { Card } from "components";

class App extends React.Component {
  componentWillMount() {
    console.log("AAAA");
  }

  render() {
    return (
      <Card
        title="APP"
        image="https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg"
        text="bla bla"
      />
    );
  }
}

export default hot(module)(App);
