"use client"
import { useEffect } from "react"
import ReactDOM from "react-dom"

interface Params {
  children: React.ReactNode
}

export const ModalPortal = ({ children }: Params) => {
  const element = typeof window !== "undefined" && document.getElementById(`portal`)

  useEffect(() => {
    if (!element) return

    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [element])

  return element && children ? ReactDOM.createPortal(children, element) : null
}
