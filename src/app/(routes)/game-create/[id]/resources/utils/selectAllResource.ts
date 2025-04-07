import { useSelectedResourceIdStore } from "@/store/selectedResourceId"

export const handleSelectAllToggle = (resources: { resourceId?: number }[] = []) => {
  const { setSelectedResourceIds, clearSelectedResourceIds, isAllSelected } = useSelectedResourceIdStore.getState()

  if (isAllSelected(resources.length)) {
    clearSelectedResourceIds()
  } else {
    const allIds = resources.map((r) => r.resourceId).filter((id): id is number => id !== undefined) // 타입 가드로 undefined 제거
    setSelectedResourceIds(allIds)
  }
}
