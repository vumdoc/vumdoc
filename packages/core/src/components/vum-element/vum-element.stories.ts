import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

import {
  VumElement,
  VumElementProps,
} from "~/src/components/vum-element/vum-element.ce";

const meta = {
  title: "sample/vum-element",
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
    html`<vum-element count-type="${arg.countType}">
      <p>View in Storybook v7</p>
    </vum-element>`,
};
