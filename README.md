# 코드 참고내용

SSG 를 사용 시 useSession 훅에서 데이터를 가져올 수 없으므로 세션 데이터가 필요한 컴포넌트인 Header 컴포넌트를
Header 와 HeaderSSG 컴포넌트로 분리하여 각각 useSession, getSession 으로 분리하고 layout.tsx 에 각각 적용하였음.

SSR, CSR 사용 시 : orval 에서 사용한 server 기반 react-query prefetch 를 사용함.<br />
SSG, ISR 사용 시 : fetch 기반 prefetch 사용 or Orval 에서 사용한 server 기반 react-query prefetch 를 사용함.

> fetch-cache 가 필요한 경우 fetch 기반으로 사용해야하지만, SSG 로 .html 을 만들어두기 때문에 현재 상황에서 필요한 경우가 없으므로 orval prefetch 로 충분하다고 판단

```TS
// fetch-cache 가 필요한 경우
const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${Number(id)}`, {
    cache: "force-cache",
    next: { revalidate: 60 }
  })
```

```TS
// 필요하지 않은 경우
<PrefetchBoundary
  prefetchActions={prefetchGetGameStatus(queryClient, Number(id))}
  queryClient={queryClient}
  onError={notFound}
>
```
