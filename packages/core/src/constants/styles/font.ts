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
    font-weight: 300 400 500 700 900; /* Light Regular Medium Bold Black   */
    font-display: swap;
    font-style: normal;
  }
`;

export const typography = css`
  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .text {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    &.-strong {
      font-weight: 700;
    }
  }

  .sub-text {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;

    &.-strong {
      font-weight: 700;
    }
  }

  :host,
  ::slotted(*) {
    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .text {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;

      &.-strong {
        font-weight: 700;
      }
    }

    .sub-text {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;

      &.-strong {
        font-weight: 700;
      }
    }
  }
`;
