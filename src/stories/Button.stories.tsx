import { Button } from "@/components/Button";
import type { Decorator, Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    backgroundColor: "#ff0",
    children: "Button",
    primary: false,
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

const withPinkDecorator: Decorator = Story => (
  <div
    style={{
      backgroundColor: "pink",
      padding: "1rem",
      display: "inline-block",
    }}
  >
    <Story />
  </div>
);

export const Default: Story = {
  // name: 'Default',
  args: {},
};

export const Primary: Story = {
  args: {
    backgroundColor: "#ADAF08",
    children: "Primary Button",
    primary: true,
  },
  decorators: [withPinkDecorator],
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    backgroundColor: "#2d5d83",
    children: "Tertiary Button",
  },
};
