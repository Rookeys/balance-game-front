/**
 * 미디어 타입
 */
export type GameResourceResponseType = (typeof GameResourceResponseType)[keyof typeof GameResourceResponseType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameResourceResponseType = {
  IMAGE: "IMAGE",
  LINK: "LINK"
} as const
