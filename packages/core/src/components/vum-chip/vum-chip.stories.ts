import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

import { VumChip, VumChipProps } from "~/src/components/vum-chip/vum-chip.ce";

const meta: Meta<VumChipProps> = {
  title: "components/vum-chip",
  tags: ["autodocs"],
  render: (args) => {
        new VumChip();

        return html`<vum-chip mode="${args.mode}">vum-chip</vum-chip>`;
      },
  args: { mode:undefined },
  argTypes: {"mode":{"control":"select","options":["dark","light"]}},
};

export default meta;
type Story = StoryObj<VumChipProps>;

export const Primary: Story = {
  args: {
    mode: "light",
  },
};
