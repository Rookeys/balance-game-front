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
  const baseClassName = "inline-flex items-center justify-center disabled:bg-gray"
  const variantClassName = variant === "basic" ? "px-4 py-2 rounded-sm" : ""

  return (
    <Comp className={cn(baseClassName, variantClassName, className)} type={props.type ?? "button"} {...props}>
      {children}
    </Comp>
  )
}
