import RadioGroup from "@/components/form/radioGroup/RadioGroup"
import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof RadioGroup> = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    name: "radioGroup",
    items: [
      { id: "1", value: "option1", label: "옵션1" },
      { id: "2", value: "option2", label: "옵션2" },
      { id: "3", value: "option3", label: "옵션3" }
    ]
  },
  argTypes: {
    items: {
      description: "라디오 버튼 리스트를 정의하는 배열입니다.",
      control: "object"
    },
    value: {
      description: "현재 선택된 Radio 값입니다.",
      control: "text"
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
        component: `RadioGroup 컴포넌트는 사용자가 하나의 옵션을 선택하도록 하는 컴포넌트 입니다.`
      }
    }
  }
}

export default meta

export const Default: StoryFn<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState("option1")

  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
        args.onChange?.(newValue)
      }}
    />
  )
}
