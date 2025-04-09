import GameResultPageClient from "./_components/GameResultPageClient"

interface Params {
  id: string
  resourceId: string
}

interface ResultPageProps {
  params: Promise<Params>
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { id, resourceId } = await params

  console.log(id, resourceId)

  // const queryClient = new QueryClient()
  // try {
  //   await Promise.all([
  //     prefetchGetGameDetails(queryClient, Number(id)),
  //     prefetchGetResource(queryClient, Number(id), Number(resourceId))
  //   ])
  // } catch (error) {
  //   log(error)
  //   notFound()
  // }

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <section className="mt-[20px] flex justify-center md:mt-[40px]">
      <GameResultPageClient />
    </section>
    // </HydrationBoundary>
  )
}
