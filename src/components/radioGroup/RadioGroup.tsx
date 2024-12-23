"use client"

import * as RadioGroupRadix from "@radix-ui/react-radio-group"
import { forwardRef } from "react"
import type { RadioItemType } from "./_components"
import { RadioItem } from "./_components"

interface Params {
  name: string
  value: string
  items: RadioItemType[]
  onChange: (value: string) => void
}

const RadioGroup = forwardRef<HTMLDivElement, Params>(({ name, value, items, onChange }, ref) => {
  return (
    <RadioGroupRadix.Root name={name} value={value} onValueChange={onChange} className="flex flex-col gap-4" ref={ref}>
      {items.map((item) => (
        <RadioItem key={item.id} id={item.id} value={item.value} label={item.label} selected={item.value === value} />
      ))}
    </RadioGroupRadix.Root>
  )
})

RadioGroup.displayName = "RadioGroup"

export default RadioGroup
