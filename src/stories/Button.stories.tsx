import { Button } from "@/components/Button"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    variant: "basic",
    children: "Button",
    className: "bg-primary-10 dark:bg-primary-80"
  },
  argTypes: {
    variant: {
      description: "기본 스타일링을 사용할지, 처음부터 커스텀할지에 대한 여부",
      table: {
        defaultValue: { summary: "basic", detail: "basic 인 경우에는 버튼의 기본스타일이 적용 됨" },
        type: { summary: "basic | custom" }
      },
      control: {
        type: "select"
      },
      options: ["basic", "custom"]
    },
    children: {
      description: "버튼 안에 표시될 텍스트"
    },
    className: {
      description: "추가 스타일링을 위한 클래스 이름",
      control: "text"
    },
    asChild: {
      table: { disable: true }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `Button 컴포넌트는 기본적으로 버튼 스타일을 제공하며, 'asChild' prop을 사용하면 다른 컴포넌트로도 사용할 수 있습니다.`
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "기본 버튼"
  }
}

export const Custom: Story = {
  args: {
    variant: "custom",
    children: "커스텀 버튼",
    className: "bg-blue-10 dark:bg-blue-80 hover:bg-blue-20 hover:bg-blue-90 active:scale-[0.95] px-2 py-2 rounded-xsm"
  }
}
