"use client"

import * as RadioGroup from "@radix-ui/react-radio-group"
import { forwardRef } from "react"
import type { RadioItemType } from "./_components"
import { RadioItem } from "./_components"

interface Params {
  name: string
  value: string
  items: RadioItemType[]
  onChange: (value: string) => void
}

const Radio = forwardRef<HTMLDivElement, Params>(({ name, value, items, onChange }, ref) => {
  return (
    <RadioGroup.Root name={name} value={value} onValueChange={onChange} className="flex flex-col gap-4" ref={ref}>
      {items.map((item) => (
        <RadioItem key={item.id} id={item.id} value={item.value} label={item.label} selected={item.value === value} />
      ))}
    </RadioGroup.Root>
  )
})

Radio.displayName = "Radio"
