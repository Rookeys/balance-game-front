"use client"
import Spinner from "@/components/Spinner"
import useCheckReactNativeWebView from "@/hooks/useCheckReactNativeWebView"
import dynamic from "next/dynamic"
import { ReactNode } from "react"

const PullToRefreshLogic = dynamic(() => import("@/lib/pullToRefresh/PullToRefreshLogic"), { ssr: false })

interface PullToRefreshProps {
  children: ReactNode
  onRefresh?: () => Promise<void>
  maxDistance?: number
  loadingComponent?: ReactNode
}

const PullToRefresh = ({
  children,
  maxDistance = 50,
  onRefresh,
  loadingComponent = <Spinner />
}: PullToRefreshProps) => {
  const isWebView = useCheckReactNativeWebView()

  if (!isWebView) {
    return <>{children}</>
  }

  return (
    <PullToRefreshLogic maxDistance={maxDistance} onRefresh={onRefresh} loadingComponent={loadingComponent}>
      {children}
    </PullToRefreshLogic>
  )
}

export default PullToRefresh

// "use client"
// import Spinner from "@/components/Spinner"
// import { ReactNode } from "react"
// import dynamic from "next/dynamic"

// const PullToRefreshLogic = dynamic(() => import("@/lib/pullToRefresh/PullToRefreshLogic"), { ssr: false })

// interface PullToRefreshProps {
//   children: ReactNode
//   onRefresh?: () => Promise<void>
//   maxDistance?: number
//   loadingComponent?: ReactNode
// }

// const PullToRefresh = ({
//   children,
//   maxDistance = 50,
//   onRefresh,
//   loadingComponent = <Spinner />
// }: PullToRefreshProps) => {
//   if (typeof window !== "undefined" && window.ReactNativeWebView != null) {
//     return (
//       <PullToRefreshLogic maxDistance={maxDistance} onRefresh={onRefresh} loadingComponent={loadingComponent}>
//         {children}
//       </PullToRefreshLogic>
//     )
//   }

//   return <>{children}</>
// }

// export default PullToRefresh
