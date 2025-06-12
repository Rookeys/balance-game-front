import { QueryClient } from "@tanstack/react-query"

export async function getFirstPagePrefetchInfiniteQuery<T>({
  queryClient,
  queryKey,
  queryFn
}: {
  queryClient: QueryClient
  queryKey: any
  queryFn: () => Promise<T>
}): Promise<QueryClient> {
  queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn: queryFn,
    initialPageParam: 0
  })

  return queryClient // 작업 완료 여부와 관계없이 queryClient 반환
}

// import { QueryClient } from "@tanstack/react-query"

// export function getFirstPagePrefetchInfiniteQuery<T>({
//   queryClient,
//   queryKey,
//   queryFn,
//   initialPageParam = 0
// }: {
//   queryClient: QueryClient
//   queryKey: any
//   queryFn: ({ pageParam }: { pageParam?: number }) => Promise<T>
//   initialPageParam?: number
// }): Promise<QueryClient> {
//   return queryClient
//     .prefetchInfiniteQuery({
//       queryKey,
//       queryFn: ({ pageParam = initialPageParam }) => queryFn({ pageParam }),
//       initialPageParam
//     })
//     .then(() => queryClient)
// }
