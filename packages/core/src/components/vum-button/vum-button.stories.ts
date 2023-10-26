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
      >vum-button</vum-button
    >`;
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
