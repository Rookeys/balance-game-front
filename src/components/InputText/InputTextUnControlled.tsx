"use client"

import { forwardRef } from "react"
import { InputTextErrorMessage, InputTextLabel } from "./_components"

interface Params {
  id: string
  label?: string
  required?: boolean
  placeholder?: string
  errorMessage?: string
  ariaLabel?: string
}

const InputTextUnControlled = forwardRef<HTMLInputElement, Params>(
  ({ label, required = false, placeholder = "", id, errorMessage, ariaLabel, ...props }, ref) => {
    return (
      <section className="inline-flex flex-col gap-[4px]">
        {label && <InputTextLabel id={id} label={label} />}
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
        {!!errorMessage && <InputTextErrorMessage id={id} errorMessage={errorMessage} />}
      </section>
    )
  }
)

// `forwardRef`로 반환된 컴포넌트에 displayName 설정
InputTextUnControlled.displayName = "InputTextUnControlled"

export default InputTextUnControlled
