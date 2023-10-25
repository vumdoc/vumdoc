import { CSSResult, LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss, satoshiFont, color } from "~/src/constants/styles";
import style from "~/src/components/vum-button/vum-button.post.css?inline";

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

  static styles = [color, satoshiFont, resetCss, style as unknown as CSSResult];
}

declare global {
  interface HTMLElementTagNameMap {
    "vum-button": VumButton;
  }
}
