import * as SelectPrimitive from "@radix-ui/react-select"
import { ChevronDown } from "lucide-react"
import { forwardRef } from "react"

interface Params {
  ref?: React.Ref<HTMLButtonElement>
}

export const SelectTrigger = forwardRef<HTMLButtonElement, Params>((props, ref) => {
  return (
    <SelectPrimitive.Trigger
      className="inline-flex items-center justify-between px-4 py-2 text-sm font-medium border border-gray-20 rounded-md hover:bg-light"
      ref={ref}
    >
      <SelectPrimitive.Value placeholder="카테고리 선택" />
      <SelectPrimitive.Icon>
        <ChevronDown className="w-[20px] h-[20px] text-gray" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})

SelectTrigger.displayName = "SelectTrigger"
