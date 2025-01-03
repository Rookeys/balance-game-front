import * as SelectPrimitive from "@radix-ui/react-select"
import { forwardRef } from "react"
import { SelectOpenContent, SelectTrigger } from "./_components"

interface Params {
  name: string
  value: string
  items: SelectOptionType[]
  onChange: (value: string) => void
}

const Select = forwardRef<HTMLButtonElement, Params>(({ name, value, items, onChange }, ref) => {
  return (
    <SelectPrimitive.Root name={name} value={value} onValueChange={onChange}>
      <SelectTrigger ref={ref} />
      {items.length > 0 && <SelectOpenContent items={items} />}
    </SelectPrimitive.Root>
  )
})

Select.displayName = "Select"

export default Select
