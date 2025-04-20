# 캐싱전략 내용

SSG 를 사용 시 useSession 훅에서 데이터를 가져올 수 없으므로 세션 데이터가 필요한 컴포넌트인 Header 컴포넌트를
Header 와 HeaderSSG 컴포넌트로 분리하여 각각 useSession, getSession 으로 분리하고 layout.tsx 에 각각 적용하였음.

SSR 사용 케이스 : orval 에서 사용한 server 기반 react-query prefetch 를 사용<br />
SSG, ISR 사용 케이스 : NextJS 의 HTML 캐싱전략을 사용하고, 갱신 필요 시 revalidate 값 설정이나 on-demand revalidation 사용

fetch-cache 사용 케이스 : 페이지에 대한 HTML 이 아닌 각 API 에 대한 캐싱을 사용하는 경우 fetchBoundary 사용

> - orval prefetch 가 필요한가에 대한 고민 중.

```TS
// fetch-cache 가 필요한 경우 예시
<FetchPrefetchBoundary
  prefetchActions={fetch(
    `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/list?${qs.stringify({
      size: 10,
      sortType: GetMainGameListSortType.MONTH
    })}`,
    {
      cache: "force-cache",
      next: { revalidate: 60 }
    }
  )}
  queryKey={getGetMainGameListQueryKey({
    size: 10,
    sortType: GetMainGameListSortType.MONTH
  })}
  queryClient={queryClient}
  onError={notFound}
>
```

```TS
// fetch-cache 필요하지 않은 경우 예시
<PrefetchBoundary
  prefetchActions={prefetchGetGameStatus(queryClient, Number(id))}
  queryClient={queryClient}
  onError={notFound}
>
```

## 메인페이지 (fetch-cache)

주간 인기 월드컵 5분
최근 등록된 이상형 월드컵 10초
월간 인기 월드컵 5분

검색결과: CSR

## 월드컵 상세 페이지 (POST, PUT, DELETE 요청 시 on-demand revalidate)

SSG 5분

## 월드컵 랭킹 페이지

월드컵 디테일 데이터(타이틀) - 5분
3등까지의 랭킹: 5분 (fetch-cache)
랭킹: CSR - ISR 5분이랑 고민중

## 댓글 페이지

디테일 정보: 5분 (fetch-cache)
3등까지의 랭킹: 5분 (fetch-cache)
댓글: CSR

리소스 페이지 (우승 페이지)
리소스 정보 (SSG? fetch-cache?)
3등까지의 랭킹: 5분 (fetch-cache)
댓글: CSR
