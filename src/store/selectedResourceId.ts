import { create } from "zustand"

type SelectedResourceIdStore = {
  selectedResourceIds: number[]
  setSelectedResourceIds: (ids: number[]) => void
  toggleSelectedResourceId: (id: number) => void
  clearSelectedResourceIds: () => void
  isSelected: (id: number) => boolean
  isAllSelected: (resources: { resourceId?: number }[]) => boolean
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

  isAllSelected: (resources) => {
    const selectedIds = get().selectedResourceIds
    const pageIds = resources?.map((r) => r.resourceId).filter((id): id is number => id !== undefined)

    return pageIds.length > 0 && pageIds.every((id) => selectedIds.includes(id))
  }
}))
