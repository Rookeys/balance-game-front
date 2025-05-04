import { cn } from "@/utils/cn"
import { Check, LucideProps } from "lucide-react"

interface CustomCheckIconProps extends LucideProps {
  className?: string
}

export default function CustomCheckIcon({ className, ...iconProps }: CustomCheckIconProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Check {...iconProps} />
    </div>
  )
}
