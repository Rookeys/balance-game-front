import { cn } from "@/utils/cn"
import * as SelectPrimitive from "@radix-ui/react-select"
import { ArrowDown, ArrowUp, Check } from "lucide-react"

interface Params {
  items: SelectOptionType[]
}

export const SelectOpenContent = ({ items }: Params) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="z-[50] rounded-xsm border bg-white shadow-md dark:border-black dark:bg-dark-night">
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center py-2">
          <ArrowUp />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport className="p-2">
          {items.map((item) => (
            <SelectPrimitive.Item
              key={item.id}
              value={item.value}
              className={cn(
                "flex cursor-pointer items-center rounded-xsm px-4 py-2 text-sm",
                "hover:bg-blue-10 dark:hover:bg-blue-70",
                "outline-none focus:bg-blue-20 dark:focus:bg-blue-80"
              )}
            >
              <SelectPrimitive.ItemText>{item.label}</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="ml-[4px]">
                <Check className="h-[16px] w-[16px] text-green dark:text-green-70" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center py-2">
          <ArrowDown />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}
