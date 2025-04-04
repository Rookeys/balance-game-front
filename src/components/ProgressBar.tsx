interface Params {
  backgroundColor?: string
  barColor?: string
  percent: number
  needIndicator?: boolean
}

export default function ProgressBar({
  backgroundColor = "#F5F5F5",
  barColor = "#000000",
  percent,
  needIndicator = true
}: Params) {
  return (
    <div className="relative h-[12px] w-full rounded-full bg-[#F5F5F5]" style={{ backgroundColor }}>
      <div className="h-[12px] rounded-full bg-black" style={{ width: `${percent}%`, backgroundColor: barColor }} />
      {needIndicator && (
        <div
          className="absolute top-1/2 h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ left: `${percent}%`, backgroundColor: barColor }}
        />
      )}
    </div>
  )
}
