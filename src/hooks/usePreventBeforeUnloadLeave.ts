// Todo React Native 에서는 Alert 로 처리해야할지 확인필요 (post message)
"use client"
import { useEffect, useCallback } from "react"

const usePreventBeforeUnloadLeave = (enabled: boolean = true) => {
  // #region exit event
  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (enabled) {
        e.preventDefault()
        e.returnValue = "" // 레거시 브라우저 지원
      }
    },
    [enabled]
  )

  useEffect(() => {
    if (enabled) {
      window.addEventListener("beforeunload", handleBeforeUnload)
    }
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [enabled, handleBeforeUnload])
  // #endregion exit event
}

export default usePreventBeforeUnloadLeave
