"use client"
import { cn } from "@/utils/cn"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ asChild = false, className, children, ...props }) => {
  const Comp = asChild ? Slot : "button"
  const baseClassName = "inline-flex items-center justify-center"

  return (
    <Comp className={cn(baseClassName, className)} {...props}>
      {children}
    </Comp>
  )
}
