"use client"

import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import { cn } from "@/utils/cn"
import { InputHTMLAttributes, ReactNode } from "react"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  errorMessage?: string
  ariaLabel?: string
  inputClassName?: string
  labelClassName?: string
  SubDescription?: ReactNode
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
  inputClassName,
  labelClassName,
  maxLength,
  SubDescription,
  ...rest
}) => {
  return (
    <section className={cn("inline-flex flex-col gap-[4px]", className)}>
      {label && <InputLabel id={id} label={label} required={required} className={labelClassName} />}
      <input
        id={id}
        className={cn(
          "w-full rounded-[12px] border px-[16px] py-[16px] outline-none placeholder:text-label-neutral focus:border-primary-normal",
          inputClassName
        )}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!errorMessage}
        aria-label={ariaLabel}
        {...rest}
      />
      {SubDescription && SubDescription}
      {!SubDescription && maxLength && (
        <p className="self-end">
          {value?.toString().length ?? 0}/{maxLength}
        </p>
      )}
      {!!errorMessage && <InputErrorMessage id={id} errorMessage={errorMessage} />}
    </section>
  )
}

export default InputText
