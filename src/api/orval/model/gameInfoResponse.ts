import type { GameInfoResponseAccessType } from "./gameInfoResponseAccessType"

export interface GameInfoResponse {
  /** 리소스 제목 */
  title?: string
  /** 설명 */
  description?: string
  /** 총 리소스 갯수 */
  totalResourceNums?: number
  /** 접근 권한 */
  accessType?: GameInfoResponseAccessType
}
