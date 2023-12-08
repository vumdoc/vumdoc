import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

import {
  VumButton,
  VumButtonProps,
} from "~/src/components/vum-button/vum-button.ce";

const meta = {
  title: "components/vum-button",
  tags: ["autodocs"],
  render: (args) => {
    new VumButton();

    return html`<vum-button
      mode="${args.mode}"
      ?disabled=${args.isDisabled}
      type="${args.type}"
      href="${args.href}"
      target="${args.target}"
      >vum-button</vum-button
    >`;
  },
  args: {
    mode: "light",
    isDisabled: false,
    type: "primary",
    href: undefined,
    target: undefined,
  },
  argTypes: {
    mode: {
      control: "select",
      options: ["dark", "light"],
    },
    type: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    isDisabled: {
      control: "boolean",
    },
    href: {
      control: "text",
    },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
    },
  },
} satisfies Meta<VumButtonProps>;

export default meta;
type Story = StoryObj<VumButtonProps>;

export const Primary: Story = {
  args: {
    mode: "light",
    isDisabled: false,
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    mode: "light",
    isDisabled: false,
    type: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    mode: "light",
    isDisabled: false,
    type: "tertiary",
  },
};

export const Disabled: Story = {
  args: {
    mode: "light",
    isDisabled: true,
    type: "primary",
  },
};

export const LinkButton: Story = {
  args: {
    mode: "light",
    isDisabled: false,
    type: "primary",
    href: "https://www.google.com",
    target: "_blank",
  },
};
