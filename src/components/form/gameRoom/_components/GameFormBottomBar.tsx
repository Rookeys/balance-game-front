import BottomBarWrapper from "@/components/BottomBarWrapper"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import { Dispatch, SetStateAction } from "react"

interface Params {
  step: 1 | 2
  setStep: Dispatch<SetStateAction<1 | 2>>
  percent?: number
  disabled?: boolean
}

export default function GameFormBottomBar({ step, setStep, percent = 0, disabled }: Params) {
  return (
    <BottomBarWrapper>
      <div className="flex items-center gap-[12px]">
        <ProgressBar percent={percent} />
        <p className="rounded-[100px] bg-gray-100 px-[12px] py-[4px]">{percent}%</p>
      </div>
      <Button
        key={`${step}-button`}
        className="bg-black text-white"
        type={step === 1 ? "button" : "submit"}
        disabled={disabled}
        onClick={() => {
          if (step === 1) {
            setStep(2)
          }
        }}
      >
        다음
      </Button>
    </BottomBarWrapper>
  )
}
