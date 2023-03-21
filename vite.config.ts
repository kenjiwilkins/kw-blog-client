/// <reference types="vitest" />
import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
const viteConfig = defineViteConfig({
  plugins: [vue()],
  base: "/kw-blog-client/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: "istanbul",
        include: ["src/**/*.{js,ts,vue}"],
      },
    },
  })
);
