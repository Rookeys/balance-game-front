"use client"

import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import { cn } from "@/utils/cn"
import { forwardRef, InputHTMLAttributes } from "react"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  errorMessage?: string
  ariaLabel?: string
  labelClassName?: string
}

const InputTextUnControlled = forwardRef<HTMLInputElement, Params>(
  (
    { label, required = false, placeholder = "", id, errorMessage, ariaLabel, className, labelClassName, ...props },
    ref
  ) => {
    return (
      <section className={cn("inline-flex flex-col gap-[4px]", className)}>
        {label && <InputLabel id={id} label={label} className={labelClassName} />}
        <input
          ref={ref}
          id={id}
          type="text"
          className="border-[2px] rounded-xsm px-2 py-1"
          placeholder={placeholder}
          required={required}
          aria-invalid={!!errorMessage}
          aria-label={ariaLabel}
          {...props}
        />
        {!!errorMessage && <InputErrorMessage id={id} errorMessage={errorMessage} />}
      </section>
    )
  }
)

// `forwardRef`로 반환된 컴포넌트에 displayName 설정
InputTextUnControlled.displayName = "InputTextUnControlled"

export default InputTextUnControlled
