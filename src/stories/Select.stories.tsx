import Select from "@/components/select/Select"; // Select 컴포넌트 경로
import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    name: "select",
    value: "",
    items: [
      { id: "1", value: "option1", label: "Option 1" },
      { id: "2", value: "option2", label: "Option 2" },
      { id: "3", value: "option3", label: "Option 3" },
      { id: "4", value: "option4", label: "Option 4" },
      { id: "5", value: "option5", label: "Option 5" }
    ]
  },
  argTypes: {
    value: {
      description: "현재 선택된 Select 값입니다.",
      control: "text"
    },
    items: {
      description: "드롭다운에 표시할 옵션 목록입니다.",
      control: "object"
    },
    name: {
      table: { disable: true }
    },
    onChange: {
      table: { disable: true }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `**Select** 컴포넌트는 드롭다운 메뉴를 제공하여 사용자가 옵션을 선택할 수 있게 합니다.`
      }
    }
  }
}

export default meta

export const Default: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState("option1")

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
        args.onChange?.(newValue)
      }}
    />
  )
}
