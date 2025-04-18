"use client"
import {
  getGetResourcesUsingPageQueryKey,
  useDeleteResource
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { Button } from "@/components/Button"
import { useQueryClient } from "@tanstack/react-query"
import { FilePenLine, Trash2 } from "lucide-react"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useState } from "react"

const ConfirmModal = dynamic(() => import("@/components/modal/ConfirmModal"))

interface Params {
  resourceId: number
  name?: string
  disabled?: boolean
}

export default function FormAction({ resourceId, name = "", disabled }: Params) {
  const { id } = useParams()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const queryClient = useQueryClient()

  const { mutateAsync: deleteResource } = useDeleteResource()

  const handleDelete = async () => {
    await deleteResource({ gameId: Number(id), resourceId })
    queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) })
  }

  return (
    <div className="flex h-full flex-wrap items-center justify-around gap-[4px]">
      <Button type="submit" variant="custom" disabled={disabled}>
        <FilePenLine />
      </Button>
      <Button type="button" variant="custom" onClick={() => setIsOpen(true)}>
        <Trash2 />
      </Button>
      {isOpen && (
        <ConfirmModal
          title="삭제"
          description={`${name} 데이터를 삭제 하시겠습니까?`}
          onClose={() => setIsOpen(false)}
          overlayClose
          onClick={handleDelete}
        />
      )}
    </div>
  )
}
