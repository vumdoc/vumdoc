import { CSSResult, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import style from "~/src/components/vum-button/vum-button.post.css?inline";
import { resetCss, satoshiFont, color } from "~/src/constants/styles";

export type VumButtonProps = {
  mode?: "dark" | "light";
  type?: "primary" | "secondary" | "tertiary";
  isDisabled?: boolean;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

/**
 * The `vum-button` component is a button component.
 */
@customElement("vum-button")
export class VumButton extends LitElement {
  /**
   * Specify the display mode as `dark | light`.
   */
  @property({ attribute: "mode", type: String })
  mode?: VumButtonProps["mode"] = "light";

  /**
   * Specify whether the button should be disabled, or not
   */
  @property({ attribute: "disabled", type: Boolean })
  isDisabled?: VumButtonProps["isDisabled"] = false;

  /**
   * Specify the button style
   */
  @property({ attribute: "type", type: String })
  type?: VumButtonProps["type"] = "primary";

  /**
   * The link will be opened when the button is clicked.
   *
   * Specifying this will change it to `<a>`.
   */
  @property({ attribute: "href", type: String })
  href?: VumButtonProps["href"] = undefined;

  @property({ attribute: "target", type: String })
  target?: VumButtonProps["target"] = undefined;

  render() {
    return this.href
      ? html`<a
          class=${classMap({
            "vum-button": true,
            "-primary": this.type === "primary",
            "-secondary": this.type === "secondary",
            "-tertiary": this.type === "tertiary",
            "-disabled": this.isDisabled,
            "-href": !!this.href,
          })}
          ?data-is-dark="${this.mode === "dark"}"
          href="${this.href}"
          target="${this.target}"
        >
          <slot></slot>
        </a>`
      : html`<button
          class=${classMap({
            "vum-button": true,
            "-primary": this.type === "primary",
            "-secondary": this.type === "secondary",
            "-tertiary": this.type === "tertiary",
            "-disabled": this.isDisabled,
          })}
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
