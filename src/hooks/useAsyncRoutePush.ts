// https://github.com/vercel/next.js/issues/61737

"use client"
import { useRouter } from "next/navigation"
import { useEffect, useTransition } from "react"

type ObserverCallback = () => void

const createRouteObserver = () => {
  let observer: ObserverCallback | null = null

  const setObserver = (callback: ObserverCallback) => {
    observer = callback
  }

  const notify = () => {
    if (observer) {
      observer()
    }
  }

  return { setObserver, notify }
}

const routeObserver = createRouteObserver()

export const useAsyncRoutePush = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const asyncPush = async (path: string) => {
    return new Promise<void>((resolve) => {
      startTransition(() => {
        router.push(path)
      })

      routeObserver.setObserver(() => {
        resolve()
      })
    })
  }

  useEffect(() => {
    if (!isPending) {
      routeObserver.notify()
    }
  }, [isPending])

  return asyncPush
}
