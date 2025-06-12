import { create } from "zustand"

interface NavigationStoreState {
  isGuard: boolean
  setIsGuard: (value: boolean) => void
}

export const useNavigationStore = create<NavigationStoreState>((set) => ({
  isGuard: false,
  setIsGuard: (value) => set({ isGuard: value })
}))
