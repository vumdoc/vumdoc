import { CSSResult, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import style from "~/src/components/vum-button/vum-button.post.css?inline";
import { resetCss, satoshiFont, color } from "~/src/constants/styles";

export type VumButtonProps = {
  mode: "dark" | "light";
  type: "primary" | "secondary" | "tertiary";
  isDisabled: boolean;
};

@customElement("vum-button")
export class VumButton extends LitElement {
  @property({ attribute: "mode", type: String })
  mode: VumButtonProps["mode"] = "light";

  @property({ attribute: "disabled", type: Boolean })
  isDisabled: VumButtonProps["isDisabled"] = false;

  @property({ attribute: "type", type: String })
  type: VumButtonProps["type"] = "primary";

  render() {
    return html`<button
      class=${classMap({
        "vum-button": true,
        "-primary": this.type === "primary",
        "-secondary": this.type === "secondary",
        "-tertiary": this.type === "tertiary",
      })}
      ?disabled="${this.isDisabled}"
      ?data-is-dark="${this.mode === "dark"}"
    >
      <slot></slot>
    </button>`;
  }

  static styles = [color, satoshiFont, resetCss, style as unknown as CSSResult];
}

declare global {
  interface HTMLElementTagNameMap {
    "vum-button": VumButton;
  }
}
