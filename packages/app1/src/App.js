import React from "react";
import { hot } from "react-hot-loader";
import { Card } from "components";

const App = () => (
  <Card
    title="APP1"
    image="https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg"
    text="bla bla"
  />
);

export default hot(module)(App);
