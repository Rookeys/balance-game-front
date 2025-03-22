import { log } from "@/utils/log"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

type Props = {
  prefetchActions: Promise<QueryClient> | Promise<QueryClient>[]
  queryClient: QueryClient
  children: React.ReactNode
  onError?: () => void
}

export async function PrefetchBoundary({ prefetchActions, queryClient, children, onError }: Props) {
  // const queryClient = new QueryClient()
  try {
    if (Array.isArray(prefetchActions)) {
      await Promise.all(prefetchActions.map((prefetchAction) => prefetchAction))
    } else {
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
