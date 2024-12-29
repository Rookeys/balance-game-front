"use client"

import { cn } from "@/utils/cn"
import { ChangeEventHandler } from "react"
import { InputErrorMessage, InputLabel } from "./_components"

interface Params {
  id: string
  label?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  required?: boolean
  placeholder?: string
  errorMessage?: string
  ariaLabel?: string
  className?: string
  labelClassName?: string
}

const InputTextControlled: React.FC<Params> = ({
  label,
  value,
  onChange,
  required = false,
  placeholder,
  id,
  errorMessage,
  ariaLabel,
  className,
  labelClassName
}) => {
  return (
    <section className={cn("inline-flex flex-col gap-[4px]", className)}>
      {label && <InputLabel id={id} label={label} required={required} className={labelClassName} />}
      <input
        id={id}
        type="text"
        className="border-[2px] rounded-xsm px-2 py-1"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!errorMessage}
        aria-label={ariaLabel}
      />
      {!!errorMessage && <InputErrorMessage id={id} errorMessage={errorMessage} />}
    </section>
  )
}

export default InputTextControlled
