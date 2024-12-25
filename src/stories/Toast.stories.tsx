import ToasterWithTheme from "@/components/ToasterWithTheme"
import type { Meta, StoryObj } from "@storybook/react"
import { toast, Toaster } from "sonner"

const meta: Meta = {
  title: "Toast",
  tags: ["autodocs"],
  args: {
    title: "타이틀",
    description: "토스트 설명",
    action: false,
    actionLabel: "Undo",
    position: "bottom-right",
    closeButton: false,
    isExpand: false,
    richColors: true
  },
  argTypes: {
    description: {
      control: "text",
      description: "토스트 메세지에 대한 설명 데이터 입니다."
    },
    action: {
      control: "boolean",
      description: "액션버튼이 필요한지에 대한 값입니다."
    },
    actionLabel: {
      control: "text",
      description: "토스트 메세지에 액션버튼이 포함되는 경우, 버튼의 텍스트 값입니다."
    },
    position: {
      control: {
        type: "select"
      },
      options: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
      description: "토스트 메세지의 위치 설정 값입니다."
    },
    closeButton: {
      control: "boolean",
      description: "토스트 메세지에 closeButton 을 표시할지에 대한 값입니다."
    },
    isExpand: {
      control: "boolean",
      description: "토스트메세지가 여러개가 나왔을시에 Expand 처리 할지에 대한 값입니다."
    },
    richColors: {
      control: "boolean",
      description: `토스트 메세지의 richColors 테마 사용에 대한 값입니다.<br/>
      (richColors 테마는 기본 토스트에는 적용되지 않습니다.)`
    }
  },
  parameters: {
    docs: {
      description: {
        component: `Toast 컴포넌트는 Sonner를 사용하여 토스트 메시지를 표시하는 컴포넌트 입니다.<br/>
        Toast 확인은 Docs가 아닌곳에서 진행 해주세요.`
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

const showToast = (type: "message" | "info" | "success" | "warning" | "error" | "promise", args: typeof meta.args) => {
  const toastOptions = {
    description: args?.description,
    position: args?.position,
    richColors: args?.richColors,
    closeButton: args?.closeButton,
    isExpand: args?.isExpand,
    ...(args?.action && {
      action: {
        label: args?.actionLabel,
        onClick: () => {}
      }
    })
  }

  toast[type](args?.title, toastOptions)
}

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <button onClick={() => showToast("message", args)} className="rounded-md bg-blue-500 text-white px-4 py-2">
          테스트 버튼
        </button>
        <Toaster richColors={args.richColors} expand={args.isExpand} />
        <ToasterWithTheme />
      </>
    )
  }
}

export const Information: Story = {
  render: (args) => {
    return (
      <>
        <button onClick={() => showToast("info", args)} className="rounded-md bg-blue-500 text-white px-4 py-2">
          테스트 버튼
        </button>
        <Toaster richColors={args.richColors} expand={args.isExpand} />
        <ToasterWithTheme />
      </>
    )
  }
}

export const Success: Story = {
  render: (args) => {
    return (
      <>
        <button onClick={() => showToast("success", args)} className="rounded-md bg-blue-500 text-white px-4 py-2">
          테스트 버튼
        </button>
        <Toaster richColors={args.richColors} expand={args.isExpand} />
        <ToasterWithTheme />
      </>
    )
  }
}

export const Warning: Story = {
  render: (args) => {
    return (
      <>
        <button onClick={() => showToast("warning", args)} className="rounded-md bg-blue-500 text-white px-4 py-2">
          테스트 버튼
        </button>
        <Toaster richColors={args.richColors} expand={args.isExpand} />
        <ToasterWithTheme />
      </>
    )
  }
}

export const Error: Story = {
  render: (args) => {
    return (
      <>
        <button onClick={() => showToast("error", args)} className="rounded-md bg-blue-500 text-white px-4 py-2">
          테스트 버튼
        </button>
        <Toaster richColors={args.richColors} expand={args.isExpand} />
        <ToasterWithTheme />
      </>
    )
  }
}

export const PromiseToast: Story = {
  render: (args) => {
    const randomPromise = (): Promise<string> =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve("성공")
          } else {
            reject("실패")
          }
        }, 2000)
      })

    const showToast = () => {
      toast.promise(randomPromise, {
        loading: "Loading...",
        success: () => {
          return `Promise 가 완료 되었습니다.`
        },
        error: "Promise 가 실패 하였습니다."
      })
    }

    return (
      <>
        <button onClick={() => showToast()} className="rounded-md bg-blue-500 text-white px-4 py-2">
          테스트 버튼
        </button>
        <Toaster richColors={args.richColors} expand={args.isExpand} />
        <ToasterWithTheme />
      </>
    )
  }
}
