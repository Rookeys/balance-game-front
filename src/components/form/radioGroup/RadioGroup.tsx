"use client"

import * as RadioGroupRadix from "@radix-ui/react-radio-group"
import { RadioItem } from "./_components"

interface Params {
  name: string
  value?: string
  items: SelectOptionType[]
  onChange: (value: string) => void
}

const RadioGroup = ({ name, value, items, onChange }: Params) => {
  return (
    <RadioGroupRadix.Root name={name} value={value} onValueChange={onChange} className="flex flex-col gap-2">
      {items.map((item) => (
        <RadioItem key={item.id} id={item.id} value={item.value} label={item.label} selected={item.value === value} />
      ))}
    </RadioGroupRadix.Root>
  )
}

export default RadioGroup
