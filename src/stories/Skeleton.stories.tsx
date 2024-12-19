import Skeleton from "@/components/Skeleton"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    style: { width: 200, height: 200 }
  },
  argTypes: {
    style: { control: "object" }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Skeleton 컴포넌트는 로딩 상태를 시각적으로 표시하는 컴포넌트입니다. 이 컴포넌트는 다양한 크기와 형태로 사용될 수 있습니다."
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {}
}

export const RoundedNone: Story = {
  args: {
    className: "rounded-none"
  }
}

export const RoundedFull: Story = {
  args: {
    className: "rounded-full"
  }
}
