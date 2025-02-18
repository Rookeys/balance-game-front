export interface GameResourceResponse {
  /** 리소스 ID */
  resourceId?: number
  /** 리소스 제목 */
  title?: string
  /** 이미지 URL */
  fileUrl?: string
  /** 유튜브 Link */
  link?: string
  /** 유튜브 URL 시작 초 */
  startSec?: number
  /** 유튜브 URL 끝 초 */
  endSec?: number
  /** 우승 비율 */
  winRate?: number
}
