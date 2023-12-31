import type { StorybookConfig } from "@storybook/web-components-vite";

import { mergeConfig } from "vite";
import { join, dirname, resolve } from "path";

import postcssLit from "rollup-plugin-postcss-lit";
import postcssNested from "postcss-nested";
import autoStoryGenerator from "@vumdoc/auto-story-generator";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [
        postcssLit(),
        autoStoryGenerator.vite({
          dirname: resolve(__dirname, "../"),
          preset: "lit",
        }),
      ],

      css: {
        postcss: {
          plugins: [postcssNested],
        },
      },

      resolve: {
        alias: {
          "~": resolve(__dirname, "../"),
          "~/*": resolve(__dirname, "../*"),
        },
      },
    });
  },
};
export default config;
