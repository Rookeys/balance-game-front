import type { GamePlayResourceResponse } from "./gamePlayResourceResponse"
import type { GamePlayWinningResourceResponse } from "./gamePlayWinningResourceResponse"

export interface GamePlayResponse {
  /** 게임방 id */
  playId?: number
  /** 선택한 n강 */
  totalRoundNums?: number
  /** 현재 진행 중인 라운드 */
  currentRoundNums?: number
  leftResource?: GamePlayResourceResponse
  rightResource?: GamePlayResourceResponse
  winningResource?: GamePlayWinningResourceResponse
}
