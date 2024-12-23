import Logo from "@/components/Logo"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
  tags: ["autodocs"],
  args: {
    size: 40,
    "aria-label": "logo"
  },
  argTypes: {
    size: {
      description: "로고 크기를 정하는 값"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Logo 컴포넌트는 웹사이트를 대표하는 로고를 나타내는 컴포넌트 입니다."
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {}
