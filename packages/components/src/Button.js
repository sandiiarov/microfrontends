import React from "react";
import { Button as B } from "rebass";

const Button = ({ children, ...props }) => <B {...props}>{children}</B>;

export default Button;
