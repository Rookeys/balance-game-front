import Header from "@/components/Header"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `Header 컴포넌트는 로고, 게임만들기, 테마 토글버튼, 마이페이지 버튼으로 구성되어 있습니다.<br/>
        사용자 경험을 위해 기본적으로 픽토그램으로 구성되어 있습니다.`
      }
    },
    nextjs: {
      appDirectory: true
    },
    layout: "fullscreen" // centered, fullscreen, padded
  }
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
