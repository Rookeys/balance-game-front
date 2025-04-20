import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"
import { log } from "@/utils/log"

type FetchAction = (() => Promise<Response>) | Promise<Response>

type Props = {
  prefetchActions: FetchAction | FetchAction[]
  queryClient: QueryClient
  queryKey: readonly unknown[] | readonly unknown[][]
  children: React.ReactNode
  onError?: () => void
}

export async function FetchPrefetchBoundary({ prefetchActions, queryClient, queryKey, children, onError }: Props) {
  const fetchAndCache = async (fetchAction: FetchAction, key: readonly unknown[]) => {
    try {
      const response = typeof fetchAction === "function" ? await fetchAction() : await fetchAction
      if (!response.ok) throw new Error("Fetch failed in FetchPrefetchBoundary")
      const data = await response.json()
      queryClient.setQueryData(key, data)
    } catch (err) {
      log(err)
      if (onError) onError()
    }
  }

  const isPrefetchArray = Array.isArray(prefetchActions)
  const isQueryKeyArrayOfArrays = Array.isArray(queryKey) && Array.isArray(queryKey[0])

  if (isPrefetchArray && isQueryKeyArrayOfArrays) {
    const actions = prefetchActions as FetchAction[]
    const keys = queryKey as readonly unknown[][]

    if (actions.length !== keys.length) {
      console.warn("prefetchActions와 queryKey의 길이가 다릅니다.")
    }

    await Promise.all(actions.map((action, index) => fetchAndCache(action, keys[index])))
  } else if (!isPrefetchArray && !isQueryKeyArrayOfArrays) {
    await fetchAndCache(prefetchActions as FetchAction, queryKey as readonly unknown[])
  } else {
    console.error("prefetchActions와 queryKey 타입이 일치하지 않습니다. (둘 다 배열이거나 둘 다 단일 값이어야 합니다.)")
    if (onError) onError()
  }

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}

// import { log } from "@/utils/log"
// import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

// type FetchAction =
//   | (() => Promise<Response>) // fetch() 함수 (필요 시 비동기 래핑 가능)
//   | Promise<Response> // 또는 그냥 Promise<Response>

// type Props = {
//   prefetchActions: FetchAction | FetchAction[]
//   queryClient: QueryClient
//   queryKey: readonly unknown[]
//   children: React.ReactNode
//   onError?: () => void
// }

// export async function FetchPrefetchBoundary({ prefetchActions, queryClient, queryKey, children, onError }: Props) {
//   const fetchAndCache = async (fetchAction: FetchAction) => {
//     try {
//       const response = typeof fetchAction === "function" ? await fetchAction() : await fetchAction
//       if (!response.ok) throw new Error("Fetch failed in FetchPrefetchBoundary")
//       const data = await response.json()

//       queryClient.setQueryData(queryKey, data)
//     } catch (err) {
//       log(err)
//       if (onError) onError()
//     }
//   }

//   if (Array.isArray(prefetchActions)) {
//     await Promise.all(prefetchActions.map((action) => fetchAndCache(action)))
//   } else {
//     await fetchAndCache(prefetchActions)
//   }

//   return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
// }
