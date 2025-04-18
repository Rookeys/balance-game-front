import { useSelectedResourceIdStore } from "@/store/selectedResourceId"

export const handleSelectAllToggle = (resources: { resourceId?: number }[] = []) => {
  const { setSelectedResourceIds, isAllSelected } = useSelectedResourceIdStore.getState()
  const currentSelected = useSelectedResourceIdStore.getState().selectedResourceIds
  const pageIds = resources.map((r) => r.resourceId).filter((id): id is number => id !== undefined)

  if (isAllSelected(resources)) {
    const updated = currentSelected.filter((id) => !pageIds.includes(id))
    setSelectedResourceIds(updated)
    // clearSelectedResourceIds()
  } else {
    const merged = Array.from(new Set([...currentSelected, ...pageIds]))
    setSelectedResourceIds(merged)
  }
}
