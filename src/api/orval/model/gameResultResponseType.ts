/**
 * Image 인지 Youtube Link 인지 구분하는 Enum
 */
export type GameResultResponseType = (typeof GameResultResponseType)[keyof typeof GameResultResponseType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameResultResponseType = {
  IMAGE: "IMAGE",
  LINK: "LINK"
} as const
