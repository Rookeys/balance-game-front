"use client"
import { createContext } from "react"

interface CookieContextType {
  noBlind: boolean | null
}

interface CookieProviderProps {
  children: React.ReactNode
  noBlind: boolean
}

export const CookieContext = createContext<CookieContextType>({ noBlind: null })

export default function CookieProvider({ children, noBlind }: CookieProviderProps) {
  return <CookieContext.Provider value={{ noBlind }}>{children}</CookieContext.Provider>
}
