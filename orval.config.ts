module.exports = {
  petstore: {
    output: {
      mode: "tags-split",
      target: "src/api",
      schemas: "src/api/model",
      client: "react-query",
      httpClient: "axios",
      prettier: true,
      // mock: true,
      override: {
        header: false,
        mutator: {
          path: "./src/api/clientInstance.ts",
          name: "customInstance"
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: "cursorId"
          // useSuspenseQuery: true,
          // useSuspenseInfiniteQuery: true
        },
        operations: {
          existsByNickname: {
            query: {
              useQuery: true,
              useInfinite: false
            }
          }
        }
      },
      // allParamsOptional: true,
      urlEncodeParameters: true
    },
    input: {
      target: "https://api.balancegame.site/v3/api-docs/all"
    }
  }
}
