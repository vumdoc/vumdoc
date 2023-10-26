import postcssNesting from "postcss-nesting";
import postcssLit from "rollup-plugin-postcss-lit";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [postcssLit()],

  css: {
    postcss: {
      plugins: [postcssNesting],
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
});
