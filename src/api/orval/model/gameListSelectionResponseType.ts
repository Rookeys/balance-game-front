/**
 * 미디어 타입
 */
export type GameListSelectionResponseType =
  (typeof GameListSelectionResponseType)[keyof typeof GameListSelectionResponseType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameListSelectionResponseType = {
  IMAGE: "IMAGE",
  LINK: "LINK"
} as const
