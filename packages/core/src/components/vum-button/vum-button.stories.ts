import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { VumButton, VumButtonProps } from "./vum-button.ce";

const meta = {
  title: "components/vum-button",
  tags: ["autodocs"],
  render: () => new VumButton(),
  argTypes: {},
} satisfies Meta<VumButtonProps>;

export default meta;
type Story = StoryObj<VumButtonProps>;

export const Primary: Story = {
  render: () => html`<vum-button></vum-button>`,
};
