import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    backgroundColor: "#ff0",
    label: "Button",
  },
  argTypes: {
    size: { control: "select" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    backgroundColor: "#ADAF08",
    label: "Primary Button",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "Secondary Button",
    primary: false,
  },
};

export const Tertiary: Story = {
  args: {
    backgroundColor: "#2d5d83",
    label: "Tertiary Button",
    primary: false,
  },
};
