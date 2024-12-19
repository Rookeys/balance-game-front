import { cn } from "@/utils/cn"
import { CSSProperties } from "react"

interface Params {
  className: string
  style?: CSSProperties
}

/**
 *
 * @param className
 * className 에 width, height 설정 필수
 */
const Skeleton = ({ className, style }: Params) => {
  return <div style={style} className={cn("bg-gray-30 dark:bg-gray-70 animate-pulse rounded-md", className)} />
}

export default Skeleton
