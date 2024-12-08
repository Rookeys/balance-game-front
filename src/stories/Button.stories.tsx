import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    backgroundColor: "#ff0",
    children: "Button",
  },
  argTypes: {
    size: { control: "select" },
    backgroundColor: { control: "color" },
    children: {
      options: ["Italic", "Click me!", "More Click!"],
      mapping: {
        Italic: <em>This is Italic mapping!</em>,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    primary: false
  },
};

export const Primary: Story = {
  args: {
    backgroundColor: "#ADAF08",
    children: "Primary Button",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Secondary Button",
    primary: false,
  },
};

export const Tertiary: Story = {
  args: {
    backgroundColor: "#2d5d83",
    children: "Tertiary Button",
    primary: false,
  },
};
