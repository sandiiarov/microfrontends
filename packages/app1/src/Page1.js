import React from "react";
import { Paper, Grow, Dendrogram } from "components";

const raw = {
  name: "index.html",
  children: [
    {
      name: "systemjs",
      children: [
        { name: "system.js" },
        { name: "amd.js" },
        {
          name: "packagemap",
          children: [
            { name: "react" },
            { name: "react-dom" },
            { name: "components" },
            { name: "etc" }
          ]
        }
      ]
    },
    {
      name: "main.js",
      children: [
        {
          name: "navigation",
          children: [{ name: "manifest.json", children: [{ name: "main.js" }] }]
        },
        {
          name: "app1",
          children: [
            {
              name: "manifest.json",
              children: [
                {
                  name: "main.js",
                  children: [
                    { name: "page1.js" },
                    { name: "page2.js" },
                    { name: "etc" }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "app2",
          children: [
            {
              name: "manifest.json",
              children: [
                {
                  name: "main.js",
                  children: [
                    { name: "page1.js" },
                    { name: "page2.js" },
                    { name: "etc" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const Page1 = () => (
  <Grow in>
    <Paper
      style={{
        padding: 20,
        margin: 20,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Dendrogram raw={raw} width={1500} height={700} />
    </Paper>
  </Grow>
);

export default Page1;
