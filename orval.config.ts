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
          useInfiniteQueryParam: "cursorId",
          useSuspenseQuery: true
          // useSuspenseInfiniteQuery: true
        },
        operations: {
          getMainGameList: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getCommentsByGameResult: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getResourcesUsingCursorId: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getProfileByEmail: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getFollowings: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getFollowers: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getResultRanking: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getParentCommentsByGameResource: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getChildrenCommentsByGameResource: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getRecentPlays: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getMyGameList: {
            query: {
              useQuery: true,
              useInfinite: true
            }
          },
          getUserGameListByEmail: {
            query: {
              useQuery: true,
              useInfinite: true
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
