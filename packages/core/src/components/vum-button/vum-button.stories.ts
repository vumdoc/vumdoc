import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { VumButton, VumButtonProps } from "./vum-button.ce";

const meta = {
  title: "components/vum-button",
  tags: ["autodocs"],
  render: () => new VumButton(),
  argTypes: {
    mode: {
      control: "select",
      options: ["dark", "light"],
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
  },
  render: (args) =>
    html`<vum-button mode="${args.mode}" ?disabled=${args.isDisabled}
      >vum-button</vum-button
    >`,
};
