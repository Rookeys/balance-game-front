"use client"

import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import { cn } from "@/utils/cn"
import { TextareaHTMLAttributes, ReactNode } from "react"

interface Params extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label?: string
  errorMessage?: string
  ariaLabel?: string
  inputClassName?: string
  labelClassName?: string
  SubDescription?: ReactNode
  disableEnter?: boolean // Enter 키 입력 방지 옵션
}

const Textarea: React.FC<Params> = ({
  label,
  value,
  onChange,
  required = false,
  id,
  errorMessage,
  ariaLabel,
  inputClassName,
  className,
  labelClassName,
  maxLength,
  SubDescription,
  disableEnter = false, // 기본값 false (Enter 허용)
  ...rest
}) => {
  return (
    <section className={cn("inline-flex flex-col gap-[4px]", className)}>
      {label && <InputLabel id={id} label={label} required={required} className={labelClassName} />}
      <textarea
        id={id}
        className={cn("w-full resize-none rounded-[12px] border-[2px] px-[16px] py-[16px]", inputClassName)}
        value={value}
        onChange={(e) => {
          if (onChange) {
            if (!!maxLength) {
              if (e.target.value.length <= maxLength) {
                onChange(e)
              }
            } else {
              onChange(e)
            }
          }
        }}
        required={required}
        aria-invalid={!!errorMessage}
        aria-label={ariaLabel}
        onKeyDown={(e) => {
          if (disableEnter && e.key === "Enter") {
            e.preventDefault() // Enter 키 입력 방지
          }
        }}
        {...rest}
      />
      {SubDescription && SubDescription}
      {!SubDescription && maxLength && (
        <p className="self-end text-label-regular text-label-neutral">
          {value?.toString().length ?? 0}/{maxLength}
        </p>
      )}
      {!!errorMessage && <InputErrorMessage id={id} errorMessage={errorMessage} />}
    </section>
  )
}

export default Textarea
