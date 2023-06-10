/// <reference types="vitest" />
import { defineConfig as defineViteConfig, loadEnv } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";

import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { version } from "./package.json";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log("TOKEN", process.env.VITE_APP_SENTRY_TOKEN);
  return defineViteConfig({
    build: {
      sourcemap: true,
    },
    define: {
      "process.env.RELEASE_VERSION": `"kw-blog-client@${version}"`,
    },
    plugins: [
      vue(),
      sentryVitePlugin({
        org: "kenji-wilkins",
        project: "kw-blog-client",
        // @ts-ignore
        token: process.env.VITE_APP_SENTRY_TOKEN,
        release: {
          name: `kw-blog-client@${version}`,
        },
      }),
    ],
    base: "/",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
