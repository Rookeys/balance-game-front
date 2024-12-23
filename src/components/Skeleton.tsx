import { cn } from "@/utils/cn"

interface Params {
  className: string
}

/**
 *
 * @param className
 * className 에 width, height 설정 필수
 */
const Skeleton = ({ className }: Params) => {
  return <div className={cn("bg-gray-30 dark:bg-gray-70 animate-pulse rounded-md", className)} />
}

export default Skeleton
