/**
 * 미디어 타입
 */
export type GamePlayResourceResponseType =
  (typeof GamePlayResourceResponseType)[keyof typeof GamePlayResourceResponseType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GamePlayResourceResponseType = {
  IMAGE: "IMAGE",
  LINK: "LINK"
} as const
