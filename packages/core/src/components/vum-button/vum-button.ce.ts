import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

export type VumButtonProps = {};

@customElement("vum-button")
export class VumButton extends LitElement {
  render() {
    return html`<button>Click Me</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "vum-button": VumButton;
  }
}
