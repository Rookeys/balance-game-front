import FileUploadDropZone from '@/components/form/fileUpload/FileUploadDropZone'
import ToasterWithTheme from "@/components/ToasterWithTheme"
import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof FileUploadDropZone> = {
  title: "FileUploadDropZone",
  component: FileUploadDropZone,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    onValueChange: { table: { disable: true } },
    value: {
      description: "현재 업로드 된 데이터입니다",
      control: { type: "file", disable: true },
      table: {
        type: { summary: "File[] | null" }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `FileUploadDropZone 컴포넌트는 유저의 파일을 업로드 받는 컴포넌트 입니다.<br/>
        <b>Drag & Drop</b> 또는 <b>클릭</b> 방식으로 업로드를 할 수 있습니다.`
      }
    }
  }
}

export default meta

export const Default: StoryFn<typeof FileUploadDropZone> = (args) => {
  const [value, setValue] = useState<File[] | null>(null)

  return (
    <>
      <section className="w-screen max-w-[400px]">
        <FileUploadDropZone
          {...args}
          value={value}
          onValueChange={(newValue) => {
            setValue(newValue)
          }}
        />
      </section>
      <ToasterWithTheme />
    </>
  )
}
