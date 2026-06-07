export type GetUserGameListByEmailSearchType =
  (typeof GetUserGameListByEmailSearchType)[keyof typeof GetUserGameListByEmailSearchType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserGameListByEmailSearchType = {
  TITLE: "TITLE",
  NICKNAME: "NICKNAME"
} as const
