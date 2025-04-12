import dayjs from "dayjs"
import tz from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
dayjs.extend(tz)

export const dayjsWithExtends = dayjs

export const convertUtcToKoreaDate = (utcDate?: string | Date) => {
  if (!utcDate) return ""
  return dayjsWithExtends.utc(utcDate).tz("Asia/Seoul").format("YYYY.MM.DD")
}

export const convertUtcToKoreaDaTime = (utcDate?: string | Date) => {
  if (!utcDate) return ""
  return dayjsWithExtends.utc(utcDate).tz("Asia/Seoul").format("YYYY.MM.DD HH:mm")
}
