import BottomBarWrapper from "@/components/BottomBarWrapper"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import { Dispatch, SetStateAction } from "react"
import GameCreateTooltip from "./GameCreateTooltip"
import { offset } from "@floating-ui/dom"

interface Params {
  step: 1 | 2
  setStep: Dispatch<SetStateAction<1 | 2>>
  percent?: number
  disabled?: boolean
}

export default function GameFormBottomBar({ step, setStep, percent = 0, disabled }: Params) {
  return (
    <BottomBarWrapper className="h-[124px]">
      <div className="flex items-center gap-[12px]">
        <ProgressBar percent={percent} />
        <p className="rounded-[100px] bg-gray-100 px-[12px] py-[4px]">{percent}%</p>
      </div>
      <Button
        data-tooltip-id={"game-create-bottom-bar-button"}
        key={`${step}-button`}
        type={step === 1 ? "button" : "submit"}
        disabled={disabled}
        onClick={() => {
          if (step === 1) {
            setStep(2)
          }
        }}
      >
        {step === 1 ? "다음" : "월드컵 생성"}
      </Button>
      <GameCreateTooltip id="game-create-bottom-bar-button" place="top" middlewares={[offset(68)]} />
    </BottomBarWrapper>
  )
}
