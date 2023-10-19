import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "My custom Storybook",
  brandUrl: "https://example.com",
  brandImage: "/landscape-logo.png",
  brandTarget: "_self",

  //
  colorPrimary: "#5498FF",
  colorSecondary: "#87B7FF",

  // UI
  appBg: "#EAEAEA",
  appContentBg: "#F8F8F8",
  appBorderColor: "#EAEAEA",
  appBorderRadius: 8,

  // Text colors
  textColor: "#1D1D1D",
  textInverseColor: "#F8F8F8",

  // Toolbar default and active colors
  barTextColor: "#1D1D1D",
  barSelectedColor: "#535353",
  barBg: "#F8F8F8",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#EAEAEA",
  inputTextColor: "#1D1D1D",
  inputBorderRadius: 4,
});
