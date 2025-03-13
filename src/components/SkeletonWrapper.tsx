import { cn } from "@/utils/cn"

interface Params {
  className?: string
  children: React.ReactNode
}

export default function SkeletonWrapper({ className, children }: Params) {
  return (
    <div role="status" className={cn("inline-block animate-pulse rounded-md bg-gray-30 dark:bg-gray-70", className)}>
      {children}
    </div>
  )
}
