import { defineConfig } from "vite";

export default defineConfig({
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
