import { create } from "zustand"
import { Session } from "next-auth"

type SessionStore = {
  session: Session | null
  setSession: (session: Session | null) => void
  clearSession: () => void
}

export const useSessionStore = create<SessionStore>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  clearSession: () => set({ session: null })
}))
