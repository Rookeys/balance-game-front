export interface GameListResponse {
  /** 게임방 ID */
  roomId?: number
  /** 게임 타이틀 */
  title?: string
  /** 설명 */
  description?: string
  /** 왼쪽 선택지 FileUrl / Link */
  leftContent?: string
  /** 오른쪽 선택지 FileUrl / Link */
  rightContent?: string
  /** 왼쪽 선택지 설명 */
  leftTitle?: string
  /** 오른쪽 선택지 설명 */
  rightTitle?: string
}
