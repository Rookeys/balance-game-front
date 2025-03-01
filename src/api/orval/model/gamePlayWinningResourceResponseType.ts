/**
 * 미디어 타입
 */
export type GamePlayWinningResourceResponseType =
  (typeof GamePlayWinningResourceResponseType)[keyof typeof GamePlayWinningResourceResponseType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GamePlayWinningResourceResponseType = {
  IMAGE: "IMAGE",
  LINK: "LINK"
} as const
