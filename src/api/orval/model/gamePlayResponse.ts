import type { GamePlayResourceResponse } from "./gamePlayResourceResponse"

export interface GamePlayResponse {
  /** 게임방 id */
  id?: number
  leftResource?: GamePlayResourceResponse
  rightResource?: GamePlayResourceResponse
}
