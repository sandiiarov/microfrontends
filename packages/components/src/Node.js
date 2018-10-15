import React from "react";
import { Group } from "@vx/group";

const Node = ({ node }) => {
  const width = 80;
  const height = 20;

  return (
    <Group top={node.y} left={node.x}>
      <rect
        width={width}
        height={height}
        y={-height / 2}
        x={-width / 2}
        fill="white"
        stroke="black"
      />
      <text dy={".33em"} fontSize={10} textAnchor={"middle"} fill="black">
        {node.data.name}
      </text>
    </Group>
  );
};

export default Node;
