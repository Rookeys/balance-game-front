import { cn } from "@/utils/cn"
import { Check, LucideProps } from "lucide-react"

interface CustomCircleCheckProps extends LucideProps {
  className?: string
}

export default function CustomCircleCheck({ className, ...iconProps }: CustomCircleCheckProps) {
  return (
    <div className={cn("flex items-center justify-center rounded-full p-[4px]", className)}>
      <Check {...iconProps} />
    </div>
  )
}
