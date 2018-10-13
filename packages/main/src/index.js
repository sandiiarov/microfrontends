import "@babel/polyfill";
import { registerApplication, start } from "single-spa";

const match = prefix => location => location.pathname.startsWith(prefix);

const register = async ({ name, activeWhen }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const version = urlParams.get(name) || "latest";

  const response = await fetch(`/packages/${name}/${version}/manifest.json`);
  const { main } = await response.json();

  return registerApplication(
    name,
    async () => {
      const { default: app } = await System.import(
        `/packages/${name}/${version}/${main}`
      );
      return app;
    },
    activeWhen
  );
};

(function() {
  Promise.all([
    register({ name: "navigation", activeWhen: () => true }),
    register({ name: "app1", activeWhen: match("/app1") }),
    register({ name: "app2", activeWhen: match("/app2") })
  ]);

  start();
})();
