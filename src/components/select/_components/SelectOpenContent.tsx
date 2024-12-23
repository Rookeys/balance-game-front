import { cn } from "@/utils/cn"
import * as SelectPrimitive from "@radix-ui/react-select"
import { ArrowDown, ArrowUp, Check } from "lucide-react"

interface Params {
  items: SelectOptionType[]
}

export const SelectOpenContent = ({ items }: Params) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="z-10 bg-white border rounded-lg shadow-md">
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center py-2">
          <ArrowUp />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport className="p-2">
          {items.map((item) => (
            <SelectPrimitive.Item
              key={item.id}
              value={item.value}
              className={cn(
                "flex items-center px-4 py-2 text-sm rounded-md cursor-pointer",
                "hover:bg-blue-10",
                "focus:bg-blue-30"
              )}
            >
              <SelectPrimitive.ItemText>{item.label}</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="ml-[4px]">
                <Check className="w-[16px] h-[16px] text-green" />
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