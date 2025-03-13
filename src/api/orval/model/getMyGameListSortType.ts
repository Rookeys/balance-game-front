export type GetMyGameListSortType = (typeof GetMyGameListSortType)[keyof typeof GetMyGameListSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMyGameListSortType = {
  old: "old",
  recent: "recent"
} as const
