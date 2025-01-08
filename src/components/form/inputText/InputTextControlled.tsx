"use client"

import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import { cn } from "@/utils/cn"
import { InputHTMLAttributes } from "react"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  errorMessage?: string
  ariaLabel?: string
  labelClassName?: string
}

const InputTextControlled: React.FC<Params> = ({
  label,
  value,
  onChange,
  required = false,
  id,
  errorMessage,
  ariaLabel,
  className,
  labelClassName,
  ...rest
}) => {
  return (
    <section className={cn("inline-flex flex-col gap-[4px]", className)}>
      {label && <InputLabel id={id} label={label} required={required} className={labelClassName} />}
      <input
        id={id}
        className="border-[2px] rounded-xsm px-2 py-1 dark:bg-dark-30 dark:border-gray w-full"
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!errorMessage}
        aria-label={ariaLabel}
        {...rest}
      />
      {!!errorMessage && <InputErrorMessage id={id} errorMessage={errorMessage} />}
    </section>
  )
}

export default InputTextControlled
