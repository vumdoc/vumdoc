import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { COLORS } from "~/src/constants/color";
import { satoshiFont } from "~/src/constants/globalStyle";

export type VumButtonProps = {
  mode: "dark" | "light" | string;
};

@customElement("vum-button")
export class VumButton extends LitElement {
  @property({ attribute: "mode", type: String })
  mode: VumButtonProps["mode"] = "light";

  render() {
    return html`<button class="vum-button"><slot></slot></button>`;
  }

  static styles = [
    satoshiFont,
    css`
      .vum-button {
        border-radius: 8px;
        border: none;
        outline: none;
        padding: 8px 16px;
        font-size: 16px;
        line-height: 1.5;
        cursor: pointer;
      }

      :host([mode="dark"]) .vum-button {
        background-color: ${unsafeCSS(COLORS.DARK.TEXT)};
        color: ${unsafeCSS(COLORS.DARK.BACKGROUND)};
      }

      :host([mode="light"]) .vum-button {
        background-color: ${unsafeCSS(COLORS.LIGHT.TEXT)};
        color: ${unsafeCSS(COLORS.LIGHT.BACKGROUND)};
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "vum-button": VumButton;
  }
}
