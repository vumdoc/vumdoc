import { css } from "lit";

export const satoshiFont = css`
  :host {
    font-family: "Satoshi", Inter, system-ui, Avenir, Helvetica, Arial,
      sans-serif;
  }

  ::slotted(*) {
    font-family: "Satoshi", Inter, system-ui, Avenir, Helvetica, Arial,
      sans-serif;
  }

  @font-face {
    font-family: "Satoshi";
    src: url("../assets/fonts/Satoshi-Variable.ttf") format("truetype");
    font-weight: 300 900;
    font-display: swap;
    font-style: normal;
  }
`;
