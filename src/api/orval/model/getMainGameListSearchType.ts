export type GetMainGameListSearchType = (typeof GetMainGameListSearchType)[keyof typeof GetMainGameListSearchType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMainGameListSearchType = {
  TITLE: "TITLE",
  NICKNAME: "NICKNAME"
} as const
