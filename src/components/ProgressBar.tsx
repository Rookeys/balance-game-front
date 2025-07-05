import { COLORS } from "@/styles/theme/colors"
import { cn } from "@/utils/cn"

interface Params {
  backgroundColor?: string
  barColor?: string
  percent: number
  needIndicator?: boolean
  className?: string
}

export default function ProgressBar({
  backgroundColor = COLORS.NEUTRAL_100,
  barColor = COLORS.CYAN_500,
  percent,
  needIndicator = true,
  className
}: Params) {
  return (
    <div className={cn("relative h-[12px] w-full rounded-full bg-fill-strong", className)} style={{ backgroundColor }}>
      <div className="h-[12px] rounded-full" style={{ width: `${percent}%`, backgroundColor: barColor }} />
      {needIndicator && percent === 0 && (
        <div
          className="absolute top-1/2 h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ left: `${percent}%`, backgroundColor: barColor }}
        />
      )}
    </div>
  )
}
