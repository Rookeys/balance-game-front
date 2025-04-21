import { create } from "zustand"

interface LoginModalState {
  isOpen: boolean
  show: () => void
  hide: () => void
}

export const useLoginModalStore = create<LoginModalState>((set) => ({
  isOpen: false,
  show: () => set({ isOpen: true }),
  hide: () => set({ isOpen: false })
}))
