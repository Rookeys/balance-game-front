import Skeleton from "@/components/Skeleton"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    className: "w-[200px] h-[200px]"
  },
  argTypes: {
    className: {
      description: "추가 스타일링을 위한 클래스 이름 (width, height 입력 필수)",
      control: "text"
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Skeleton 컴포넌트는 로딩 상태를 시각적으로 표시하는 컴포넌트 입니다. 이 컴포넌트는 다양한 크기와 형태로 사용될 수 있습니다."
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
    className: `${meta.args?.className} rounded-none`
  }
}

export const RoundedFull: Story = {
  args: {
    className: `${meta.args?.className} rounded-full`
  }
}
