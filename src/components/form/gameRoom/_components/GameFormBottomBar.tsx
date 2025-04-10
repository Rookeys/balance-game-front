import BottomBarWrapper from "@/components/BottomBarWrapper"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

interface Params {
  step: 1 | 2
  setStep: Dispatch<SetStateAction<1 | 2>>
}

export default function GameFormBottomBar({ step, setStep }: Params) {
  const pathname = usePathname()
  const percent = !pathname.includes("new") ? 100 : step === 1 ? 0 : 33
  return (
    <BottomBarWrapper>
      <div className="flex items-center gap-[12px]">
        <ProgressBar percent={percent} />
        <p className="rounded-[100px] bg-gray-10 px-[12px] py-[4px]">{percent}%</p>
      </div>
      <Button
        className="w-full bg-black text-white"
        type={step === 1 ? "button" : "submit"}
        onClick={() => {
          console.log("step", step)
          if (step === 1) {
            // if (!watch("title") || !watch("description") || watch("categories").length < 1) {
            //   toast.warning("월드컵 정보를 확인 해주세요")
            // } else {
            setStep(2)
            // }
          }
        }}
      >
        {step === 1 ? "다음" : "만들기"}
      </Button>
    </BottomBarWrapper>
  )
}
