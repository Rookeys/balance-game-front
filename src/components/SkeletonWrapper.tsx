import { cn } from "@/utils/cn"

interface Params {
  className?: string
  children: React.ReactNode
}

export default function SkeletonWrapper({ className, children }: Params) {
  return (
    <div role="status" className={cn("inline-block bg-gray-30 dark:bg-gray-70 animate-pulse rounded-md", className)}>
      {children}
    </div>
  )
}
