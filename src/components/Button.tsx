"use client"
import { cn } from "@/utils/cn"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "basic" | "custom"
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  asChild = false,
  variant = "basic",
  className,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : "button"
  const baseClassName = "inline-flex items-center justify-center transition-color-custom"
  const variantClassName =
    variant === "basic"
      ? "transition-color-custom rounded-[8px] bg-primary-normal px-[16px] py-[8px] text-body-bold text-white hover:bg-primary-hover disabled:bg-fill-strong disabled:text-label-disable"
      : ""

  return (
    <Comp className={cn(baseClassName, variantClassName, className)} type={props.type ?? "button"} {...props}>
      {children}
    </Comp>
  )
}
