import React from "react";
import { Cluster } from "@vx/hierarchy";
import { hierarchy } from "d3-hierarchy";
import Node from "./Node";
import Link from "./Link";

const Dendrogram = ({
  raw,
  width,
  height,
  margin = { top: 40, left: 0, right: 0, bottom: 110 }
}) => {
  const data = hierarchy(raw);
  return (
    <svg width={width} height={height}>
      <Cluster
        top={margin.top}
        left={margin.left}
        root={data}
        size={[
          width - margin.left - margin.right,
          height - margin.top - margin.bottom
        ]}
        nodeComponent={Node}
        linkComponent={Link}
      />
    </svg>
  );
};

export default Dendrogram;
