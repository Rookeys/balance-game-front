import ThemeToggle from "@/components/ThemeToggle"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ThemeToggle> = {
  title: "ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "ThemeToggle 컴포넌트는 다크모드, 라이트모드를 선택하는 버튼입니다."
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  name: "ThemeToggle"
}
