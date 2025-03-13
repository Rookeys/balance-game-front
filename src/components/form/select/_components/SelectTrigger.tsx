import * as SelectPrimitive from "@radix-ui/react-select"
import { ChevronDown } from "lucide-react"

interface Params {
  ref?: React.Ref<HTMLButtonElement>
  placeholder?: string
}

export const SelectTrigger = (props: Params) => {
  return (
    <SelectPrimitive.Trigger
      className="inline-flex items-center justify-between rounded-xsm border border-gray-20 px-4 py-2 text-sm font-medium hover:bg-light focus:outline-none dark:border-gray-70 dark:hover:bg-dark-night"
      {...props}
    >
      <SelectPrimitive.Value placeholder={props.placeholder} />
      <SelectPrimitive.Icon>
        <ChevronDown className="h-[20px] w-[20px] text-gray" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}
