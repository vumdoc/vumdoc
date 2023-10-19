import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import litLogo from "../../assets/lit.svg";
import viteLogo from "/vite.svg";

export type VumElementProps = {
  countType: "+1" | "+2" | "+3";
};

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("vum-element")
export class VumElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  @property({
    attribute: "count-type",
    type: String,
    converter: {
      fromAttribute(
        value: VumElementProps["countType"]
      ): VumElementProps["countType"] {
        switch (value) {
          case "+1":
          case "+2":
          case "+3":
            return value;
          default:
            console.error("<vum-element> : Invalid count-type");
            return "+1";
        }
      },
      toAttribute(value) {
        return value;
      },
    },
  })
  countType: "+1" | "+2" | "+3" = "+1";

  private _onClick() {
    switch (this.countType) {
      case "+1":
        this.count += 1;
        break;
      case "+2":
        this.count += 2;
        break;
      case "+3":
        this.count += 3;
        break;
    }
  }

  render() {
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">
        Counts increase in multiples of ${this.countType}
      </p>
      <p class="read-the-docs">${this.docsHint}</p>
    `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #747bff;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #f9f9f9;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "vum-element": VumElement;
  }
}
