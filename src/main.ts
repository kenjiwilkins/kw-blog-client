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

app.use(router);

app.mount("#app");
