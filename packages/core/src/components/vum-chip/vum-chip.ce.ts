import { CSSResult, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import style from "~/src/components/vum-chip/vum-chip.post.css?inline";
import {
  resetCss,
  satoshiFont,
  color,
  typography,
} from "~/src/constants/styles";

export type VumChipProps = {
  mode?: "dark" | "light";
};

@customElement("vum-chip")
export class VumChip extends LitElement {
  /**
   * Specify the display mode as `dark | light`.
   */
  @property({ attribute: "mode", type: String })
  mode?: VumChipProps["mode"] = "light";

  render() {
    return html`<div
      class=${classMap({
        "vum-chip": true,
        "sub-text": true,
      })}
      ?data-is-dark="${this.mode === "dark"}"
    >
      <slot></slot>
    </div>`;
  }

  static styles = [
    color,
    satoshiFont,
    resetCss,
    typography,
    style as unknown as CSSResult,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "vum-chip": VumChip;
  }
}
