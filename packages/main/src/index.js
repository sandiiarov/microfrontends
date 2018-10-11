import "@babel/polyfill";
import { registerApplication, start } from "single-spa";

const match = prefix => location => location.pathname.startsWith(prefix);

const register = ({ name, activeWhen, versions }) => {
  const version = versions[name] || "dev";

  return registerApplication(
    name,
    async () => {
      const { default: app } = await System.import(
        `/packages/${name}/${version}/main.js`
      );
      return app;
    },
    activeWhen
  );
};

(async function() {
  let versions = {};

  if (process.env.NODE_ENV === "production") {
    const response = await fetch("/versions.json");
    versions = await response.json();
  }

  await Promise.all([
    register({ name: "navigation", activeWhen: () => true, versions }),
    register({ name: "app1", activeWhen: match("/app1"), versions }),
    register({ name: "app2", activeWhen: match("/app2"), versions })
  ]);

  start();
})();
