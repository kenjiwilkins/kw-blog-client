import { createApp } from "vue";
import * as sentry from "@sentry/vue";
import { CaptureConsole } from "@sentry/integrations";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
sentry.init({
  app,
  dsn: import.meta.env.VITE_APP_SENTRY_DSN,
  release: import.meta.env.RELEASE_VERSION,
  integrations: [
    new sentry.BrowserTracing({
      tracePropagationTargets: [
        "localhost",
        /^https:\/\/cdn.contentful\.com\/spaces\/2cmxpw7zfb54\/environments\/master\//,
      ],
      routingInstrumentation: sentry.vueRouterInstrumentation(router),
    }),
    new sentry.Replay(),
    new CaptureConsole({
      levels: ["error", "warn", "log"],
    }),
  ],
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

app.config.errorHandler = (err) => {
  sentry.captureException(err);
  console.log("ERROR", err);
};

window.addEventListener("error", (event) => {
  sentry.captureException(event);
  console.log("ERROR", event);
});

window.addEventListener("unhandledrejection", (event) => {
  sentry.captureException(event);
  console.log("EXCEPTION", event);
});

app.use(router);

app.mount("#app");
