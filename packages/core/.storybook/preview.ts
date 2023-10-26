import type { Preview } from "@storybook/web-components";
import vumTheme from "./vumTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light-background",
          value: "#F8F8F8",
        },
        {
          name: "light-sub-background",
          value: "#EAEAEA",
        },
        {
          name: "dark-background",
          value: "#202020",
        },
        {
          name: "dark-sub-background",
          value: "#101010",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: vumTheme,
    },
  },
};

export default preview;
