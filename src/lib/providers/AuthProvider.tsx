"use client"

import { useSessionStore } from "@/store/session"
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { useEffect } from "react"

interface Props {
  session?: Session | null
  children: React.ReactNode
}

const AuthProvider = ({ session, children }: Props) => {
  const setSession = useSessionStore((state) => state.setSession)

  useEffect(() => {
    if (session) {
      setSession(session)
    }
  }, [session, setSession])

  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default AuthProvider
