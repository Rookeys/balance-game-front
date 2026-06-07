export type GetMyGameListSearchType = (typeof GetMyGameListSearchType)[keyof typeof GetMyGameListSearchType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMyGameListSearchType = {
  TITLE: "TITLE",
  NICKNAME: "NICKNAME"
} as const
