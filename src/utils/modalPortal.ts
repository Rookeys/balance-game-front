"use client"
import ReactDOM from "react-dom"

interface Params {
  children: React.ReactNode
}

export const ModalPortal = ({ children }: Params) => {
  const element = typeof window !== "undefined" && document.querySelector(`#portal`)

  return element && children ? ReactDOM.createPortal(children, element) : null
}
