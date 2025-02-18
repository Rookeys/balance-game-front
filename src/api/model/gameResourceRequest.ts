export interface GameResourceRequest {
  /** 리소스 제목 */
  title?: string
  /** 바꾸고자 하는 이미지 URL */
  fileUrl?: string
  /** 바꾸고자 하는 유튜브 URL */
  link?: string
  /** 유튜브 URL 시작 초 설정 */
  startSec?: number
  /** 유튜브 URL 끝 초 설정 */
  endSec?: number
}
