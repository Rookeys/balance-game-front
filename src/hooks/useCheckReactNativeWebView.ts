"use client"
import { useEffect, useState } from "react"

const useCheckReactNativeWebView = () => {
  const [isWebView, setIsWebView] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && window.ReactNativeWebView != null) {
      setIsWebView(true)
    }
  }, [])

  return isWebView
}

export default useCheckReactNativeWebView
