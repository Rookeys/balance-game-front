"use client"

import { cn } from "@/utils/cn"
import { Middleware, offset } from "@floating-ui/dom"
import { useState } from "react"
import { ITooltip, Tooltip } from "react-tooltip"

interface GameCreateTooltipProps extends ITooltip {
  middlewares?: Middleware[]
}

export default function GameCreateTooltip(props: GameCreateTooltipProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <Tooltip
      id={props.id}
      place={props.place ?? "bottom-end"}
      isOpen={isOpen}
      middlewares={props.middlewares ?? [offset(10)]}
      className={cn(
        "!pointer-events-auto !end-0 max-w-[314px] !rounded-[8px] !bg-label-strong !px-[12px] !py-[8px]",
        props.className
      )}
      classNameArrow={props.classNameArrow}
    >
      <p className="text-label-regular text-background" onClick={() => setIsOpen(false)}>
        기본 설정만 하면 바로 월드컵을 만들 수 있어요. 이후 콘텐츠를 업로드하고 나만의 월드컵을 완성해 보세요!
      </p>
    </Tooltip>
  )
}
