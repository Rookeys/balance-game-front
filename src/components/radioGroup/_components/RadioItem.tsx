import * as RadioGroup from "@radix-ui/react-radio-group"
import type { RadioItemType } from "./index"

export const RadioItem: React.FC<RadioItemType> = ({ id, value, label, selected }) => {
  return (
    <div className="flex items-center gap-2">
      <RadioGroup.Item id={id} value={value} className="h-[20px] w-[20px] rounded-full border border-gray-20">
        <RadioGroup.Indicator className="flex h-full w-full items-center justify-center bg-primary-20 rounded-full" />
      </RadioGroup.Item>
      <label htmlFor={id} className={selected ? "text-primary-20" : "text-gray"}>
        {label}
      </label>
    </div>
  )
}
