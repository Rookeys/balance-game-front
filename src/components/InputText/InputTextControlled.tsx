"use client"

import { ChangeEventHandler } from "react"
import { InputTextErrorMessage, InputTextLabel } from "./_components"

interface Params {
  id: string
  label?: string
  value: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  required?: boolean
  placeholder?: string
  errorMessage?: string
  ariaLabel?: string
}

const InputTextControlled: React.FC<Params> = ({
  label,
  value,
  onChange,
  required = false,
  placeholder,
  id,
  errorMessage,
  ariaLabel
}) => {
  return (
    <section className="inline-flex flex-col gap-[4px]">
      {label && <InputTextLabel id={id} label={label} required={required} />}
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
      {!!errorMessage && <InputTextErrorMessage id={id} errorMessage={errorMessage} />}
    </section>
  )
}

export default InputTextControlled
