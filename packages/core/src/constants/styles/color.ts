import { css, unsafeCSS } from "lit";

export type COLORS_MODE = {
  [key: string]: `#${string}`;
};

export const COLORS_LIGHT = {
  PRIMARY: "#5498FF",
  SECONDARY: "#87B7FF",

  TEXT: "#1D1D1D",
  SUB_TEXT: "#535353",

  BACKGROUND: "#F8F8F8",
  SUB_BACKGROUND: "#EAEAEA",

  BORDER: "#EAEAEA",
} as const satisfies COLORS_MODE;

export const COLORS_DARK = {
  PRIMARY: "#5498FF",
  SECONDARY: "#87B7FF",

  TEXT: "#F8F8F8",
  SUB_TEXT: "#BCBCBC",

  BACKGROUND: "#202020",
  SUB_BACKGROUND: "#101010",

  BORDER: "#101010",
} as const satisfies COLORS_MODE;

export const COLORS = {
  DARK: COLORS_DARK,
  LIGHT: COLORS_LIGHT,
} as const satisfies {
  [key: string]: COLORS_MODE;
};

export const color = css`
  :host([mode="dark"]) {
    --primary-color: ${unsafeCSS(COLORS.DARK.PRIMARY)};
    --secondary-color: ${unsafeCSS(COLORS.DARK.SECONDARY)};
    --text-color: ${unsafeCSS(COLORS.DARK.TEXT)};
    --sub-text-color: ${unsafeCSS(COLORS.DARK.SUB_TEXT)};
    --background-color: ${unsafeCSS(COLORS.DARK.BACKGROUND)};
    --sub-background-color: ${unsafeCSS(COLORS.DARK.SUB_BACKGROUND)};
    --border-color: ${unsafeCSS(COLORS.DARK.BORDER)};

    --dark-primary-color: ${unsafeCSS(COLORS.DARK.PRIMARY)};
    --dark-secondary-color: ${unsafeCSS(COLORS.DARK.SECONDARY)};
    --dark-text-color: ${unsafeCSS(COLORS.DARK.TEXT)};
    --dark-sub-text-color: ${unsafeCSS(COLORS.DARK.SUB_TEXT)};
    --dark-background-color: ${unsafeCSS(COLORS.DARK.BACKGROUND)};
    --dark-sub-background-color: ${unsafeCSS(COLORS.DARK.SUB_BACKGROUND)};
    --dark-border-color: ${unsafeCSS(COLORS.DARK.BORDER)};

    --light-primary-color: ${unsafeCSS(COLORS.LIGHT.PRIMARY)};
    --light-secondary-color: ${unsafeCSS(COLORS.LIGHT.SECONDARY)};
    --light-text-color: ${unsafeCSS(COLORS.LIGHT.TEXT)};
    --light-sub-text-color: ${unsafeCSS(COLORS.LIGHT.SUB_TEXT)};
    --light-background-color: ${unsafeCSS(COLORS.LIGHT.BACKGROUND)};
    --light-sub-background-color: ${unsafeCSS(COLORS.LIGHT.SUB_BACKGROUND)};
    --light-border-color: ${unsafeCSS(COLORS.LIGHT.BORDER)};
  }

  :host([mode="light"]) {
    --primary-color: ${unsafeCSS(COLORS.LIGHT.PRIMARY)};
    --secondary-color: ${unsafeCSS(COLORS.LIGHT.SECONDARY)};
    --text-color: ${unsafeCSS(COLORS.LIGHT.TEXT)};
    --sub-text-color: ${unsafeCSS(COLORS.LIGHT.SUB_TEXT)};
    --background-color: ${unsafeCSS(COLORS.LIGHT.BACKGROUND)};
    --sub-background-color: ${unsafeCSS(COLORS.LIGHT.SUB_BACKGROUND)};
    --border-color: ${unsafeCSS(COLORS.LIGHT.BORDER)};

    --dark-primary-color: ${unsafeCSS(COLORS.DARK.PRIMARY)};
    --dark-secondary-color: ${unsafeCSS(COLORS.DARK.SECONDARY)};
    --dark-text-color: ${unsafeCSS(COLORS.DARK.TEXT)};
    --dark-sub-text-color: ${unsafeCSS(COLORS.DARK.SUB_TEXT)};
    --dark-background-color: ${unsafeCSS(COLORS.DARK.BACKGROUND)};
    --dark-sub-background-color: ${unsafeCSS(COLORS.DARK.SUB_BACKGROUND)};
    --dark-border-color: ${unsafeCSS(COLORS.DARK.BORDER)};

    --light-primary-color: ${unsafeCSS(COLORS.LIGHT.PRIMARY)};
    --light-secondary-color: ${unsafeCSS(COLORS.LIGHT.SECONDARY)};
    --light-text-color: ${unsafeCSS(COLORS.LIGHT.TEXT)};
    --light-sub-text-color: ${unsafeCSS(COLORS.LIGHT.SUB_TEXT)};
    --light-background-color: ${unsafeCSS(COLORS.LIGHT.BACKGROUND)};
    --light-sub-background-color: ${unsafeCSS(COLORS.LIGHT.SUB_BACKGROUND)};
    --light-border-color: ${unsafeCSS(COLORS.LIGHT.BORDER)};
  }
`;
