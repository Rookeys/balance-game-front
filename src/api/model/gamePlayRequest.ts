export interface GamePlayRequest {
  /** 선택한 리소스 ID */
  winResourceId: number
  /** 선택받지 못한 리소스 ID */
  loseResourceId: number
}
