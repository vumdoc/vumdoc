import type { Meta, StoryObj } from "@storybook/web-components";
import { VumElement, VumElementProps } from "./vum-element";
import { html } from "lit";

const meta = {
  title: "components/vum-element(sample)",
  tags: ["autodocs"],
  render: () => new VumElement(),
  argTypes: {
    countType: {
      control: "select",
      options: ["+1", "+2", "+3"],
    },
  },
} satisfies Meta<VumElementProps>;

export default meta;
type Story = StoryObj<VumElementProps>;

export const Primary: Story = {
  args: {
    countType: "+1",
  },
  render: (arg) =>
    html`<vum-element count-type="${arg.countType}"></vum-element>`,
};
