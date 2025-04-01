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

const InputText: React.FC<Params> = ({
  label,
  value,
  onChange,
  required = false,
  id,
  errorMessage,
  ariaLabel,
  className,
  labelClassName,
  maxLength,
  ...rest
}) => {
  return (
    <section className={cn("inline-flex flex-col gap-[4px]", className)}>
      {label && <InputLabel id={id} label={label} required={required} className={labelClassName} />}
      <input
        id={id}
        className="w-full rounded-[12px] border-[2px] px-[16px] py-[16px] dark:border-gray dark:bg-dark-30"
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!errorMessage}
        aria-label={ariaLabel}
        {...rest}
      />
      {maxLength && (
        <p className="self-end">
          {value?.toString().length ?? 0}/{maxLength}
        </p>
      )}
      {!!errorMessage && <InputErrorMessage id={id} errorMessage={errorMessage} />}
    </section>
  )
}

export default InputText
