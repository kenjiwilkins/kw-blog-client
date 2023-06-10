import { defineConfig } from "vitest/config";
defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      include: ["src/**/*.{js,ts,vue}"],
    },
  },
});
