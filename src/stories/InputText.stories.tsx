import InputText from "@/components/InputText/InputTextControlled"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof InputText> = {
  title: "InputText",
  component: InputText,
  tags: ["autodocs"],
  args: {
    label: "라벨",
    placeholder: "텍스트를 입력해주세요.",
    required: false,
    errorMessage: "에러메세지"
  },
  argTypes: {
    label: {
      description: "입력 필드에 대한 설명을 위한 라벨입니다.",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Label" }
      }
    },
    placeholder: {
      description: "입력된 데이터가 없을때 보여지는 텍스트 값입니다.",
      control: { type: "text" },
      table: {
        type: { summary: "string" }
      }
    },
    required: {
      description: "입력 필드가 필수 입력인지 여부를 나타냅니다.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false", detail: "값이 true 면 라벨에 * 표시가 생김" },
        type: { summary: "boolean" }
      }
    },
    errorMessage: {
      description: "오류 메시지를 나타냅니다.",
      control: { type: "text" },
      table: {
        type: { summary: "string" }
      }
    },
    value: {
      description: "입력된 데이터 값을 나타내는 값입니다.",
      control: { type: "text" },
      table: {
        type: { summary: "string" }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "InputText 컴포넌트는 사용자의 텍스트 입력을 처리하는 컨트롤러 컴포넌트 입니다. 레이블과 오류 메시지를 지원합니다."
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof InputText>

export const Default: Story = {
  args: {
    label: "",
    errorMessage: ""
  }
}

export const WithLabelAndErrorMessage: Story = {
  args: {
    label: "라벨",
    errorMessage: "에러메세지"
  }
}

export const Required: Story = {
  args: {
    required: true
  }
}
