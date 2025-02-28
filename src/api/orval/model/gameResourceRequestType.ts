/**
 * 미디어 타입
 */
export type GameResourceRequestType = (typeof GameResourceRequestType)[keyof typeof GameResourceRequestType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameResourceRequestType = {
  IMAGE: "IMAGE",
  LINK: "LINK"
} as const
