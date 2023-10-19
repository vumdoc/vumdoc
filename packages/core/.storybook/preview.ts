import type { Preview } from "@storybook/web-components";
import "../src/stories/index.css";
import vumTheme from "./vumTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
