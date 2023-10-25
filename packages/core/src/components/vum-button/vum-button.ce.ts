import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { COLORS } from "~/src/constants/color";
import { resetCss, satoshiFont } from "~/src/constants/globalStyle";

export type VumButtonProps = {
  mode: "dark" | "light" | string;
  isDisabled: boolean;
};

@customElement("vum-button")
export class VumButton extends LitElement {
  @property({ attribute: "mode", type: String })
  mode: VumButtonProps["mode"] = "light";

  @property({ attribute: "disabled", type: Boolean })
  isDisabled: VumButtonProps["isDisabled"] = false;

  render() {
    return html`<button class="vum-button" ?disabled="${this.isDisabled}">
      <slot></slot>
    </button>`;
  }

  static styles = [
    satoshiFont,
    resetCss,
    css`
      .vum-button {
        position: relative;
        border-radius: 8px;
        border: none;
        outline: none;
        padding: 8px 16px;
        font-size: 16px;
        line-height: 1.5;
        cursor: pointer;
        transition: all 0.1s ease-in-out;
        font-family: "Satoshi", Inter, system-ui, Avenir, Helvetica, Arial,
          sans-serif;
        font-weight: 500;
      }

      .vum-button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: 8px;
        transition: all 0.2s ease-in-out;
      }

      /* :host([mode="dark"]) */

      :host([mode="dark"]) .vum-button {
        background-color: ${unsafeCSS(COLORS.DARK.TEXT)};
        color: ${unsafeCSS(COLORS.DARK.BACKGROUND)};
      }

      :host([mode="dark"]) .vum-button:hover::after {
        background-color: #0000002e;
      }

      :host([mode="dark"]) .vum-button:disabled {
        background-color: ${unsafeCSS(COLORS.DARK.SUB_BACKGROUND)};
        color: ${unsafeCSS(COLORS.DARK.BACKGROUND)};
        cursor: default;
      }

      /* :host([mode="light"]) */

      :host([mode="light"]) .vum-button {
        background-color: ${unsafeCSS(COLORS.DARK.BACKGROUND)};
        color: ${unsafeCSS(COLORS.LIGHT.BACKGROUND)};
      }

      :host([mode="light"]) .vum-button:hover::after {
        background-color: #eaeaea2e;
      }

      :host([mode="light"]) .vum-button:disabled {
        background-color: ${unsafeCSS(COLORS.LIGHT.SUB_BACKGROUND)};
        color: ${unsafeCSS(COLORS.LIGHT.BACKGROUND)};
        cursor: default;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "vum-button": VumButton;
  }
}
