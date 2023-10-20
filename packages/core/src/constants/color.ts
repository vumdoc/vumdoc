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
  SUB_TEXT: "#101010",

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
