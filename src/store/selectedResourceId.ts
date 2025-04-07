import { create } from "zustand"

type SelectedResourceIdStore = {
  selectedResourceIds: number[]
  setSelectedResourceIds: (ids: number[]) => void
  toggleSelectedResourceId: (id: number) => void
  clearSelectedResourceIds: () => void
  isSelected: (id: number) => boolean
  isAllSelected: (totalCount: number) => boolean
}

export const useSelectedResourceIdStore = create<SelectedResourceIdStore>((set, get) => ({
  selectedResourceIds: [],

  setSelectedResourceIds: (ids) => set({ selectedResourceIds: ids }),

  toggleSelectedResourceId: (id) => {
    const { selectedResourceIds } = get()
    const exists = selectedResourceIds.includes(id)
    const updated = exists ? selectedResourceIds.filter((v) => v !== id) : [...selectedResourceIds, id]
    set({ selectedResourceIds: updated })
  },

  clearSelectedResourceIds: () => set({ selectedResourceIds: [] }),

  isSelected: (id) => {
    return get().selectedResourceIds.includes(id)
  },

  isAllSelected: (totalCount) => {
    return get().selectedResourceIds.length === totalCount && totalCount > 0
  }
}))
