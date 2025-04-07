import { prefetchGetResourcesUsingPage } from "@/api/orval/server/game-resource-controller/game-resource-controller"
import { PrefetchBoundary } from "@/lib/providers/PrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import ResourceFormContainer from "./_components/ResourceFormContainer"

interface Params {
  id: string
}

interface ResourcePage {
  params: Promise<Params>
  searchParams: Promise<{
    page?: string
  }>
}

export default async function ResourcePage({ params, searchParams }: ResourcePage) {
  const queryClient = new QueryClient()

  const { id } = await params
  const { page } = await searchParams

  return (
    <section className="mb-[80px] flex flex-col items-center justify-center md:mb-[120px] md:mt-[40px]">
      <PrefetchBoundary
        prefetchActions={prefetchGetResourcesUsingPage(queryClient, Number(id), { page: Number(page), size: 10 })}
        queryClient={queryClient}
        onError={notFound}
      >
        <ResourceFormContainer />
      </PrefetchBoundary>
    </section>
  )
}
