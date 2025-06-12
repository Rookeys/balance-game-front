"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const useBlockNavigation = (shouldBlock: boolean, allowedRoutes: string[] = []) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isAttemptingNavigation, setIsAttemptingNavigation] = useState(false)
  const [nextRoute, setNextRoute] = useState<string | null>(null)

  const originalPushRef = useRef(router.push) // Store original router.push
  const lastLocationRef = useRef<string | null>(null) // Track last known location

  const canNavigate = (url: string) => {
    const { pathname } = new URL(url, window.location.origin)
    return allowedRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"))
  }

  useEffect(() => {
    const handleNavigation = (url: string) => {
      // ✅ If navigation is allowed, proceed immediately
      if (!shouldBlock || canNavigate?.(url) || url === pathname) {
        originalPushRef.current(url) // Use original router.push
        return
      }

      // 🚧 Block navigation & ask for confirmation
      if (nextRoute !== url) {
        // Avoid setting the same route multiple times
        setIsAttemptingNavigation(true)
        setNextRoute(url)
      }
    }

    // Override router.push **only once**
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    router.push = ((url, _options) => {
      handleNavigation(url)
    }) as typeof router.push

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      router.push = originalPushRef.current // Restore original push
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldBlock, pathname, allowedRoutes, nextRoute])

  // 🔹 Handle Reload Prevention
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (shouldBlock) {
        event.preventDefault()
        event.returnValue = ""
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [shouldBlock])

  // 🔙 Handle Back Button with Previous Route Tracking
  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      if (shouldBlock) {
        event.preventDefault()

        const previousURL = lastLocationRef.current || document.referrer || "/" // Fallback to home if unknown
        setIsAttemptingNavigation(true)
        setNextRoute(previousURL)

        history.pushState(null, "", window.location.href) // Keep user on the same page
      }
    }

    lastLocationRef.current = pathname // Track last known location
    history.pushState(null, "", window.location.href)
    window.addEventListener("popstate", handleBackButton)

    return () => {
      window.removeEventListener("popstate", handleBackButton)
    }
  }, [shouldBlock, pathname])

  const proceedNavigation = () => {
    if (nextRoute) {
      setIsAttemptingNavigation(false)
      originalPushRef.current(nextRoute) // Use original router.push
      setNextRoute(null)
    }
  }

  const cancelNavigation = () => {
    setIsAttemptingNavigation(false)
    setNextRoute(null)
  }

  return { isAttemptingNavigation, proceedNavigation, cancelNavigation }
}

export default useBlockNavigation
