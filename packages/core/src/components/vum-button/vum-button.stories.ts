import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

import {
  VumButton,
  VumButtonProps,
} from "~/src/components/vum-button/vum-button.ce";

const meta: Meta<VumButtonProps> = {
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
    mode: undefined,
    isDisabled: undefined,
    type: undefined,
    href: undefined,
    target: undefined,
  },
  argTypes: {
    mode: { control: "select", options: ["dark", "light"] },
    isDisabled: { control: "boolean" },
    type: { control: "select", options: ["primary", "secondary", "tertiary"] },
    href: { control: "text" },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
    },
  },
};

export default meta;

export type VumButtonStory = StoryObj<VumButtonProps>;

export const Primary: VumButtonStory = {
  args: {
    mode: "light",
    isDisabled: false,
    type: "primary",
    href: undefined,
    target: undefined,
  },
};
