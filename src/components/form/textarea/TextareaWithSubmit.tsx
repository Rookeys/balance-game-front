"use client"

import { Button } from "@/components/Button"
import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import { cn } from "@/utils/cn"
import { TextareaHTMLAttributes, ReactNode } from "react"
import TextareaAutosize, { TextareaAutosizeProps } from "react-textarea-autosize"

type CustomTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "style"> &
  Partial<Pick<TextareaAutosizeProps, "style">>

interface Params extends CustomTextareaProps {
  id: string
  label?: string
  errorMessage?: string
  ariaLabel?: string
  inputClassName?: string
  labelClassName?: string
  SubDescription?: ReactNode
  disableEnter?: boolean // Enter 키 입력 방지 옵션
}

const TextareaWithSubmit: React.FC<Params> = ({
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
  disableEnter = false,
  disabled,
  ...rest
}) => {
  return (
    <section className={cn("relative flex w-full flex-col gap-[4px]", className)}>
      {label && <InputLabel id={id} label={label} required={required} className={labelClassName} />}
      <TextareaAutosize
        id={id}
        className={cn(
          "w-full resize-none rounded-[12px] border-[2px] px-[12px] py-[12px] pe-[80px] text-body2-regular text-label-neutral outline-none focus:border-primary-normal",
          inputClassName
        )}
        value={value}
        cacheMeasurements
        // onChange={onChange}
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
            e.preventDefault()
          }
        }}
        {...rest}
      />
      <article className="absolute end-[12px] top-[12px] flex h-[calc(100%-24px)] flex-col justify-end">
        {maxLength && (
          <p className="self-end text-label-regular text-label-neutral">
            {value?.toString().length ?? 0}/{maxLength}
          </p>
        )}
        <Button className="bg-gray-100 px-[12px] py-[8px] md:px-[20px] md:py-[12px]" type="submit" disabled={disabled}>
          등록
        </Button>
      </article>
      {!!errorMessage && <InputErrorMessage id={id} errorMessage={errorMessage} />}
    </section>
  )
}

export default TextareaWithSubmit
