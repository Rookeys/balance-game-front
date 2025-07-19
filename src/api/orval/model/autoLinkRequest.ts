export interface AutoLinkRequest {
  /** 유튜브 URL */
  url: string
  /** 유튜브 URL 타이틀 */
  title: string
  /** 시작 초 */
  startSec?: number
  /** 끝 초 */
  endSec?: number
}
