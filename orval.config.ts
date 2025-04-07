module.exports = {
  client: {
    output: {
      mode: "tags-split",
      target: "src/api/orval/client",
      schemas: "src/api/orval/model",
      client: "react-query",
      httpClient: "axios",
      prettier: true,
      // mock: true,
      override: {
        header: false,
        mutator: {
          path: "./src/api/clientInstance.ts",
          name: "customClientInstance"
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: "cursorId",
          useSuspenseQuery: true
          // useSuspenseInfiniteQuery: true
        },
        operations: {
          existsByNickname: {
            query: {
              useQuery: true,
              useInfinite: false
            }
          },
          continuePlayRoom: {
            query: {
              useQuery: true,
              useInfinite: false
            }
          },
          getCategoryNums: {
            query: {
              useQuery: true,
              useInfinite: false
            }
          },
          getResourcesUsingPage: {
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
  },
  server: {
    output: {
      mode: "tags-split",
      target: "src/api/orval/server",
      schemas: "src/api/orval/model",
      client: "react-query",
      httpClient: "axios",
      prettier: true,
      // mock: true,
      override: {
        header: false,
        mutator: {
          path: "./src/api/serverInstance.ts",
          name: "customServerInstance"
        },
        query: {
          useQuery: true,
          useMutation: false,
          usePrefetch: true
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
