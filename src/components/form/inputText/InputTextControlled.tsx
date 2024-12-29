"use client"

import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import { cn } from "@/utils/cn"
import { ChangeEventHandler } from "react"

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
        className="border-[2px] rounded-xsm px-2 py-1 dark:bg-dark-30 dark:border-gray"
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
