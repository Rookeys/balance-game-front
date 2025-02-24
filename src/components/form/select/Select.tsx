import * as SelectPrimitive from "@radix-ui/react-select"
import { SelectOpenContent, SelectTrigger } from "./_components"

interface Params {
  name: string
  value: string
  items: SelectOptionType[]
  onChange: (value: string) => void
}

const Select = ({ name, value, items, onChange }: Params) => {
  return (
    <SelectPrimitive.Root name={name} value={value} onValueChange={onChange}>
      <SelectTrigger />
      {items.length > 0 && <SelectOpenContent items={items} />}
    </SelectPrimitive.Root>
  )
}

export default Select
