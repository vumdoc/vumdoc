import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

import {
  VumBreadcrumbs,
  VumBreadcrumbsProps,
} from "~/src/components/vum-breadcrumbs/vum-breadcrumbs.ce";

const meta: Meta<VumBreadcrumbsProps> = {
  title: "components/vum-breadcrumbs",
  tags: ["autodocs"],
  render: (args) => {
        new VumBreadcrumbs();

        return html`<vum-breadcrumbs mode="${args.mode}" .breadcrumbs="${args.breadcrumbs}">vum-breadcrumbs</vum-breadcrumbs>`;
      },
  args: { mode:undefined, breadcrumbs:undefined },
  argTypes: {"mode":{"control":"select","options":["dark","light"]},"breadcrumbs":{"control":"object"}},
};

meta.args.breadcrumbs = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default meta;
type Story = StoryObj<VumBreadcrumbsProps>;

export const Primary: Story = {
  parameters: {
    backgrounds: { default: "light-background" },
  },
  args: {
    mode: "light",
  },
};
