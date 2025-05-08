import { share, ShareAPIRequest } from "@/utils/share"

interface Params {
  title?: string
  id?: string | number
}

export const handleGameShare = async ({ title, id }: Params) => {
  const shareData: ShareAPIRequest = {
    title: `짱픽에 초대합니다`,
    text: `이상형 월드컵 ${title ?? ""}`,
    url: `https://zznpk.com/game/${id}`
  }
  share(shareData)
}
