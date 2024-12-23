import { StorybookExampleButton } from "@/stories/example/StorybookExampleButton"
import type { Decorator, Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof StorybookExampleButton> = {
  title: "StorybookExampleButton",
  component: StorybookExampleButton,
  tags: ["autodocs"],
  args: {
    backgroundColor: "#ff0",
    children: "StorybookExampleButton",
    primary: false
  },
  argTypes: {
    size: { control: "select" },
    backgroundColor: { control: "color" },
    children: {
      options: ["Italic", "Click me!", "More Click!"],
      mapping: {
        Italic: <em>This is Italic mapping!</em>
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof StorybookExampleButton>

const withPinkDecorator: Decorator = (Story) => (
  <div
    style={{
      backgroundColor: "pink",
      padding: "1rem",
      display: "inline-block"
    }}
  >
    <Story />
  </div>
)

export const Default: Story = {
  // name: 'Default',
  args: {}
}

export const Primary: Story = {
  args: {
    backgroundColor: "#ADAF08",
    children: "Primary Button",
    primary: true
  },
  decorators: [withPinkDecorator]
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Secondary Button"
  }
}

export const Tertiary: Story = {
  args: {
    backgroundColor: "#2d5d83",
    children: "Tertiary Button"
  }
}
