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
  return <div className={cn("animate-pulse rounded-md bg-gray-300", className)} />
}

export default Skeleton
