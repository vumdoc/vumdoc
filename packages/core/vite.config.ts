import path from "path";

import postcssNested from "postcss-nested";
import postcssLit from "rollup-plugin-postcss-lit";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [postcssLit()],

  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },

  build: {
    outDir: "./dist",
    lib: {
      entry: "src/main.ts",
      name: "@vumdoc/core",
      fileName: "core",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: /^lit/,
      output: {
        exports: "named",
        manualChunks: undefined,
      },
    },
  },

  resolve: {
    alias: {
      "~": path.join(__dirname, "../core"),
    },
  },
});
