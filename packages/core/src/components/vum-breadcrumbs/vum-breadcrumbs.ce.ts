import { CSSResult, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import style from "~/src/components/vum-breadcrumbs/vum-breadcrumbs.post.css?inline";
import {
  resetCss,
  satoshiFont,
  color,
  typography,
} from "~/src/constants/styles";

export type VumBreadcrumbsProps = {
  mode?: "dark" | "light";
  breadcrumbs: Array<{
    title: string;
    href: string;
  }>;
};

@customElement("vum-breadcrumbs")
export class VumBreadcrumbs extends LitElement {
  /**
   * Specify the display mode as `dark | light`.
   */
  @property({ attribute: "mode", type: String })
  mode?: VumBreadcrumbsProps["mode"] = "light";

  @property({ attribute: "breadcrumbs", type: Array })
  breadcrumbs: VumBreadcrumbsProps["breadcrumbs"] = [];

  render() {
    return html`<nav
      class=${classMap({
        "vum-breadcrumbs": true,
      })}
      ?data-is-dark="${this.mode === "dark"}"
    >
      <ul class="unordered">
        ${this.breadcrumbs?.map(
          (breadcrumb) =>
            html`<li class="item sub-text">
              <a
                class="link"
                href="${breadcrumb.href}"
                >${breadcrumb.title}</a
              >
            </li>`,
        )}
      </ul>
    </nav>`;
  }

  static styles = [
    color,
    satoshiFont,
    typography,
    resetCss,
    style as unknown as CSSResult,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "vum-breadcrumbs": VumBreadcrumbs;
  }
}
