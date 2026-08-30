# Google AdSense 검토 반려 대응 기록

> 이 문서는 `chore/temp-deploy` 브랜치(임시 배포)에서 진행한 애드센스 반려 원인 분석/수정 기록임.
> **주의: 이 브랜치는 실제 서비스 배포 브랜치가 아님.** 나중에 정식 배포 브랜치(`dev`/`main` 등)에
> 같은 작업을 다시 적용할 때 참고하려고 상세히 남겨둠. 커밋을 그대로 cherry-pick 하지 말고,
> 아래 "적용 방법" 섹션 기준으로 코드 상태를 다시 확인한 뒤 반영할 것 (그 사이에 코드가 바뀌었을 수 있음).

## 배경

- 반려 사유 (애드센스 콘솔 표시 문구): **"게시자 콘텐츠가 없는 화면에 Google 게재 광고"**
  - 정책 문구 그대로: 콘텐츠가 없거나 가치가 낮은 콘텐츠, 아직 준비 중인 화면, 알림/이동/행동 목적 화면에는 광고 불가
- 실 서비스 도메인: `https://zznpk.com`
- 애드센스 연동 방식: **자동 광고(auto ads)** — `ca-pub-6626308320183012`, `<ins class="adsbygoogle">` 같은 수동 광고 단위는 코드베이스에 없음. 즉 광고 자체 위치는 구글이 알아서 정하고, 우리가 컨트롤 가능한 건 "이 스크립트를 이 페이지에서 로드하느냐 마느냐"뿐.

## 확인된 원인 (우선순위 순)

### 원인 1 — 콘텐츠 없는 화면에도 광고 스크립트가 전역 로드됨 (1차 수정, 근본 원인 아님)

`src/app/layout.tsx` (root layout)에서 애드센스 스크립트를 **모든 라우트에 무조건** 로드하고 있었음:

```tsx
<Script
  id="adsense-script"
  async
  strategy="afterInteractive"
  crossOrigin="anonymous"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6626308320183012"
/>
```

로그인/로그아웃, 검색결과 없음, 게임 생성 폼(로그인 게이트) 같은 "콘텐츠 없는 화면"에도 광고가 뜨는 상태였음.

**왜 문제인지 (각 경로별):**

- `/sign-in`, `/sign-out` — 로그인 없어도 접근되는, 콘텐츠 없는 액션 전용 화면
- `/my-page` — 로그인 필요. 크롤러는 로그인 세션이 없으므로 항상 빈 화면/로그인 유도 화면만 보게 됨
- `/search` — 쿼리 파라미터 없이 열면 검색창만 있고 결과 없음. 크롤러는 검색어를 입력할 수 없으므로 항상 빈 결과 화면만 보임
- `/game-create/*` — my-page와 동일한 로그인 게이트 + 업로드 폼/버튼뿐, 콘텐츠 자체가 없음 (이중으로 위반)
- `/game/[id]/play` — 코드상 이미 `robots: { index: false }`로 SEO는 막아뒀지만 광고는 그대로 켜져 있었음

### 원인 2 (★ 실질적 근본 원인) — 카테고리 페이지가 크롤러에게 완전히 빈 화면으로 보임

`/category/food`, `/category/song`, `/category/fun`, `/category/celebrity`, `/category/daily`, `/category/view_all` — 이 6개 URL은 **sitemap.xml에 정식 등록**되어 구글이 실제로 크롤링/색인하는 페이지임.

문제: 홈페이지(`/`)는 서버에서 게임 목록을 미리 fetch해서 최초 HTML에 박아 보내는 SSR 프리페치 패턴(`FetchPrefetchBoundary` + `HydrationBoundary`)을 쓰는데, **카테고리 페이지만 이 패턴이 빠져 있었음.** `CategoryGameList`가 순수 `"use client"` 컴포넌트로 브라우저에서 JS 실행 후에야 API를 호출해서 데이터를 받아옴.

실제로 원본 SSR HTML을 `curl`로 떠서 확인:

```bash
curl -s https://zznpk.com/category/food | grep -o '"/game/[0-9]*"'
# → 아무것도 안 나옴 (게임 링크 0개)
curl -s https://zznpk.com/category/food | grep -c "bg-red-50"
# → 1  (로딩 중 표시용 빈 박스만 존재: <section className="h-[100vh] bg-red-50" />)
```

반면 홈페이지는:

```bash
curl -s https://zznpk.com/ | grep -o '"/game/[0-9]*"'
# → /game/169, /game/173, /game/174 ... 실제 게임 링크 다수 확인됨
```

**즉, 애드센스가 지목한 "콘텐츠 없는 화면"은 sign-in/search 같은 유틸 화면이 아니라, sitemap에 정식 등록된 카테고리 페이지 자체였을 가능성이 매우 높음.**

## 적용한 수정 (in `chore/temp-deploy`, 아직 정식 배포 브랜치엔 미반영)

### 수정 1 — 콘텐츠 없는 화면에서 애드센스 스크립트 자체를 로드하지 않음

새 파일: `src/components/AdsenseScript.tsx`

```tsx
"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

const EXCLUDED_PATH_PREFIXES = ["/sign-in", "/sign-out", "/my-page", "/search", "/game-create"]
const EXCLUDED_PATH_PATTERNS = [/^\/game\/[^/]+\/play$/]

export default function AdsenseScript() {
  const pathname = usePathname()
  const isExcluded =
    EXCLUDED_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    EXCLUDED_PATH_PATTERNS.some((pattern) => pattern.test(pathname))

  if (isExcluded) return null

  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6626308320183012"
    />
  )
}
```

`src/app/layout.tsx` 변경:

- 기존 인라인 `<Script id="adsense-script" .../>` 제거
- `<AdsenseScript />`로 교체 (import 추가)

`src/app/robots.txt` 변경:

- `Disallow: /game-create` 한 줄 추가 (원래 없었음)

**커밋:** `671a63a fix: 콘텐츠 없는 화면에서 애드센스 광고 제외`

### 수정 2 — 카테고리 페이지 SSR 프리페치 (진짜 원인 대응, 1차 시도 — 불완전했음)

`page.tsx`에서 `QueryClient` + `setQueryData` + `dehydrate` + `HydrationBoundary`로 캐시를 미리 채워서 `CategoryGameList`(client component)에 넘기는 방식으로 1차 수정함.

**커밋:** `3abc774 fix: 카테고리 페이지 게임 목록 SSR 프리페치 적용`

**⚠️ 이 1차 수정은 배포해서 확인해보니 실제로는 효과 없었음.** 배포 후 재검토를 요청했더니 여전히 같은 사유("콘텐츠 없는 화면")로 반려됨. `curl`로 재확인한 결과:

- 응답 페이로드 안에는 데이터가 `"status":"success"`로 존재함 (`queryKey":["/api/v1/games/list",{"category":"FOOD","sortType":"RECENT"}]`)
- 그런데도 실제 렌더링된 `<a href="/game/...">` 마크업은 **응답 전체에 단 하나도 없음** (`grep -c "/game/180"` → 0)
- 반면 브라우저로 직접 열면 정상적으로 카드가 다 보이고, 네트워크 탭엔 추가 API 호출이 없음 (클라이언트에서는 캐시를 어떻게든 활용하긴 함)

**당시 진단(틀림, 기록용으로 남겨둠):** TanStack Query v5의 `useInfiniteQuery`가 SSR 패스에서 하이드레이션을 못 받는 프레임워크 자체의 문제로 추정했었음. → **실제 원인 아니었음. 아래 "진짜 원인" 참고.**

### 수정 3 — `initialData`로 직접 주입 (2차 시도 — 이것도 단독으로는 불완전했음)

캐시 하이드레이션에 의존하지 않고, 서버에서 fetch한 첫 페이지 데이터를 **컴포넌트 prop으로 직접 내려서 `useInfiniteQuery`의 `initialData` 옵션으로 즉시 주입**하는 방식으로 전면 수정함. `initialData`는 훅 생성 시점에 동기적으로 읽히기 때문에 서버 렌더링 첫 패스부터 확실히 `success` 상태로 시작함 (캐시 타이밍에 의존하지 않음).

`src/app/(routes)/(ssr)/category/[category]/page.tsx`:

```tsx
// QueryClient / dehydrate / HydrationBoundary 전부 제거하고 아래처럼 단순화
let initialGames: CustomPageImplGameListResponse | undefined

try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/list?${qs.stringify(queryParams)}`, {
    cache: "force-cache",
    next: { revalidate: 60 }
  })
  if (res.ok) {
    initialGames = await res.json()
  }
} catch {
  // 프리페치 실패 시 클라이언트에서 다시 조회
}

// ...
;<CategoryGameList initialGames={initialGames} />
```

`src/app/(routes)/(ssr)/category/[category]/_components/CategoryGameList.tsx`:

```tsx
interface Props {
  initialGames?: CustomPageImplGameListResponse
}

export default function CategoryGameList({ initialGames }: Props) {
  // ...
  const { data, isLoading, ... } = useGetMainGameListInfinite(
    { category: ..., sortType: sort as GetMainGameListSortType },
    {
      query: {
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => { ... },
        ...(initialGames && sort === GetMainGameListSortType.RECENT
          ? { initialData: () => ({ pages: [initialGames], pageParams: [undefined] }) }
          : {})
      }
    }
  )
  // ...
}
```

**주의사항:**

- `initialData`는 정렬이 기본값(`RECENT`, 최신순)일 때만 적용함. 사용자가 필터로 다른 정렬(인기순 등)을 선택하면 서버에서 미리 가져온 데이터와 안 맞으므로 클라이언트가 새로 fetch하도록 조건 처리해둠 (`sort === GetMainGameListSortType.RECENT` 체크).
- 서버 fetch 호출은 `next: { revalidate: 60 }`로 ISR 캐싱 걸어둠 → 60초 안에 여러 요청이 와도 백엔드 API는 1번만 호출됨 (오히려 CSR보다 백엔드 부하 낮음). 카테고리 목록이 자주 안 바뀌면 이 값 늘려도 됨 (홈페이지 "월간 인기"는 300초 씀).

**커밋:** `b1e5a4f fix: 카테고리 페이지 무한스크롤 SSR을 initialData 방식으로 재수정`

**⚠️ 이것도 배포 후 curl로 재확인해보니 여전히 효과 없었음.** `bg-red-50` 그대로, 게임 링크 0개. 심지어 페이로드에 `initialGames` prop이 정상적으로 전달된 것까지 확인했는데도 안 먹힘.

### 진짜 원인 — `Title.tsx`가 같은 쿼리 키를 독립적으로 또 호출하고 있었음

같은 폴더의 `Title.tsx` (카테고리명 + "총 N개" 표시하는 컴포넌트)가 `CategoryGameList`와 **완전히 동일한 파라미터로 `useGetMainGameListInfinite`를 별도로 호출**하고 있었음 (총 개수를 보여주기 위해). JSX 순서상 `<Title />`이 `<CategoryGameList />`보다 먼저 렌더링됨.

TanStack Query 내부 동작: 같은 QueryClient 안에서 같은 queryKey를 가진 쿼리는 **하나의 쿼리 오브젝트를 공유**함. `Title`이 먼저 렌더링되면서 `initialData` 없이 그 쿼리를 생성해버리면, 그 쿼리는 이미 "존재하는(pending, 데이터 없음)" 상태로 캐시에 등록됨. 그 다음 `CategoryGameList`가 같은 키로 `initialData`를 들고 마운트돼도, **쿼리가 이미 존재하기 때문에 `initialData`가 적용되지 않음** (TanStack은 `initialData`를 "새로 생성되는 쿼리"에만 적용하고, "이미 존재하는 쿼리"에 대한 값 반영은 `useEffect`로 미룸 — 그리고 `useEffect`는 서버 렌더링 중에는 절대 실행 안 됨).

즉 `HydrationBoundary` 방식이든 `initialData` 방식이든, **Title이 데이터 없는 쿼리를 먼저 만들어버려서 둘 다 무효화되고 있었던 것.** 브라우저에서 멀쩡하게 보였던 이유도 동일 — 클라이언트에서는 마운트 후 `useEffect`가 정상적으로 돌아서 하이드레이션/초기값이 뒤늦게 반영됐던 것뿐, SSR 결과물(=크롤러가 보는 것)은 시종일관 비어 있었음.

### 수정 4 (★ 최종 수정) — `Title`에도 동일한 `initialGames`를 넘겨서 두 컴포넌트가 같은 시드 데이터로 쿼리를 생성하게 함

`page.tsx`:

```tsx
<Title initialGames={initialGames} />
<Filter filters={gameListFilters} />
```

`Title.tsx`도 `CategoryGameList.tsx`와 동일한 패턴 적용:

```tsx
interface Props {
  initialGames?: CustomPageImplGameListResponse
}

export default function Title({ initialGames }: Props) {
  // ...
  const { data, isLoading } = useGetMainGameListInfinite(
    { category: ..., sortType: sort as GetMainGameListSortType },
    {
      query: {
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => { ... },
        ...(initialGames && sort === GetMainGameListSortType.RECENT
          ? { initialData: () => ({ pages: [initialGames], pageParams: [undefined] }) }
          : {})
      }
    }
  )
  // ...
}
```

**핵심 교훈 (정식 배포 브랜치 적용 시 반드시 기억할 것):**
같은 화면 안에서 **같은 API를 같은 파라미터로 호출하는 훅이 여러 컴포넌트에 흩어져 있으면, 그 중 하나에만 SSR 시드 데이터를 넣는 걸로는 부족함. 같은 쿼리 키를 쓰는 모든 호출 지점에 전부 동일한 `initialData`를 넘겨야 함.** 하나라도 빠뜨리면 그 빠진 컴포넌트가 렌더링 순서상 먼저 실행될 경우 전체가 무효화됨.

**이 커밋을 배포 후 반드시 재검증할 것 — 지금까지 두 번이나 "고쳤다고 생각했는데 안 고쳐진" 전적이 있음.** curl 검증 없이 재검토 요청 넣지 말 것.

## 정식 배포 브랜치에 적용할 때 체크리스트

1. **수정 1(`AdsenseScript.tsx` + robots.txt)** 은 그대로 가져다 써도 됨. 다만 정식 배포 브랜치 코드가 이 세션 이후 바뀌었을 수 있으니, `src/app/layout.tsx`에 애드센스 `<Script>`가 여전히 인라인으로 있는지부터 확인.
2. **수정 2(캐시 하이드레이션 방식)는 그대로 가져가지 말 것.** 동작 안 하는 걸로 확인된 방식임.
3. **수정 3만(=`CategoryGameList`에만 `initialData`) 적용해도 부족함.** 반드시 **수정 4까지 같이 적용** — 같은 쿼리 키를 쓰는 `Title.tsx`에도 동일한 `initialGames`를 넘겨줘야 함. 정식 배포 브랜치 코드에서는 `Title.tsx` 구조가 다를 수 있으니, **먼저 해당 화면 안에서 `useGetMainGameListInfinite`(혹은 동일 API를 쓰는 다른 훅)를 호출하는 컴포넌트를 전부 찾아서**, 그 목록 전체에 동일한 `initialData`를 넘기는 방식으로 접근할 것. 하나라도 빠뜨리면 렌더링 순서에 따라 전체가 무효화됨.
4. 적용 후 반드시 **`curl`로 실제 SSR 응답을 직접 확인**할 것 (브라우저 스크린샷만으로는 속음 — 브라우저는 JS 실행해서 정상으로 보이지만 크롤러는 아님):
   ```bash
   curl -s https://<정식도메인>/category/<카테고리슬러그> | grep -o '"/game/[0-9]*"' | sort -u
   ```
   결과에 실제 게임 링크가 여러 개 나와야 정상. 안 나오면 아직 안 고쳐진 것. **화면에 데이터 개수/타이틀을 보여주는 부수 컴포넌트(Title 같은)가 따로 있는지도 같이 확인할 것** — 이게 이번에 두 번 삽질한 원인이었음.
5. 다른 페이지에도 `CategoryGameList`처럼 **"use client" + `useInfiniteQuery`(또는 다른 무한스크롤 훅)로 목록을 그리면서 SSR 프리페치가 안 걸려있는 곳**이 있는지 점검할 것. 이번에 확인한 것: `SearchGameList`(`/search`, `_components/SearchGameList.tsx`)도 동일한 구조적 문제(`bg-red-50` 로딩 처리, client fetch만 존재)를 갖고 있음. `/search`는 현재 robots.txt에서 크롤 차단 + 애드센스 스크립트 제외 대상이라 당장 급하지 않아서 손대지 않았음 — 하지만 검색 결과 페이지를 나중에 색인 허용하게 되면 반드시 같이 고쳐야 함.
6. sitemap에 등록된 game ID가 실제로 살아있는지 주기적으로 확인 권장. 죽은 링크로 들어가면 `src/app/not-found.tsx`(콘텐츠 거의 없는 화면: 에러 이미지 + 문구 2줄 + 버튼)가 뜨는데, 이 페이지는 URL이 고정돼있지 않아서 `AdsenseScript`의 pathname 기반 제외 로직으로 못 막음. 이 문서 작성 시점엔 sitemap의 모든 game ID가 200 정상이라 당장 터지는 문제는 아니지만, 게임이 삭제되면 잠재적으로 다시 반려 사유가 될 수 있음 (아직 미해결, 낮은 우선순위).
7. 개별 게임 상세 페이지(`/game/[id]`)의 텍스트 콘텐츠가 얇다는 점(제목 한 줄 + 설명 한 줄)도 확인했으나, 이상형 월드컵 장르 특성상 흔한 형태이고 랭킹/댓글 하위 페이지에 콘텐츠가 더 있어 우선순위 낮음으로 판단, 손대지 않음.

## 관련 커밋 (chore/temp-deploy 브랜치, 시간순)

- `671a63a` fix: 콘텐츠 없는 화면에서 애드센스 광고 제외 (수정 1)
- `3abc774` fix: 카테고리 페이지 게임 목록 SSR 프리페치 적용 (수정 2, **불완전 — 폐기**)
- `b1e5a4f` fix: 카테고리 페이지 무한스크롤 SSR을 initialData 방식으로 재수정 (수정 3, **이것도 단독으로는 불완전했음** — Title.tsx 누락)
- (다음 커밋) `Title.tsx`에도 동일 `initialGames` 적용 (수정 4, **최종**)
