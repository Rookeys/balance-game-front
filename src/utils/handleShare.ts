import { share, ShareAPIRequest } from "@/utils/share"

interface GameShareParams {
  title?: string
  id?: string | number
}

export const handleGameShare = async ({ title, id }: GameShareParams) => {
  const shareData: ShareAPIRequest = {
    title: `짱픽에 초대합니다`,
    text: `이상형 월드컵 ${title ?? ""}`,
    url: `https://zznpk.com/game/${id}`
  }
  share(shareData)
}

interface ResourceShareParams {
  title?: string
  resourceId?: string | number
  id?: string | number
}

export const handleResourceShare = async ({ title, id, resourceId }: ResourceShareParams) => {
  const shareData: ShareAPIRequest = {
    title: `짱픽에 초대합니다`,
    text: `이상형 월드컵 ${title ?? ""}`,
    url: `https://zznpk.com/game/${id}/resources/${resourceId}`
  }
  share(shareData)
}
