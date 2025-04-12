import { log } from "@/utils/log"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

type Props = {
  prefetchActions: Promise<QueryClient> | Promise<QueryClient>[]
  queryClient: QueryClient
  children: React.ReactNode
  onError?: () => void
}

export async function PrefetchBoundary({ prefetchActions, queryClient, children, onError }: Props) {
  try {
    if (Array.isArray(prefetchActions)) {
      // await sleep(5000)
      await Promise.all(prefetchActions.map((prefetchAction) => prefetchAction))
    } else {
      // await sleep(5000)
      await prefetchActions
    }
  } catch (error) {
    log(error)
    if (onError) {
      onError()
    }
  }

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
