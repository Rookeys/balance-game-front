interface ResourceType {
  id: number
  url: string
  type: "image" | "youtube"
  name: string
  media: string
  winRate: string
  start?: number
  end?: number
}

export const mockData: ResourceType[] = [
  {
    id: 1,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 1",
    media: "미디어 데이터 1",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 2",
    media: "미디어 데이터 2",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 3",
    media: "미디어 데이터 3",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 4",
    media: "미디어 데이터 4",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 5",
    media: "미디어 데이터 5",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 6,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 6",
    media: "미디어 데이터 6",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 7,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 7",
    media: "미디어 데이터 7",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 8,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 8",
    media: "미디어 데이터 8",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 9,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 9",
    media: "미디어 데이터 9",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 10,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 10",
    media: "미디어 데이터 10",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 11,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 11",
    media: "미디어 데이터 11",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 12,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 12",
    media: "미디어 데이터 12",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 13,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 13",
    media: "미디어 데이터 13",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 14,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 14",
    media: "미디어 데이터 14",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 15,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 15",
    media: "미디어 데이터 15",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 16,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 16",
    media: "미디어 데이터 16",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 17,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 17",
    media: "미디어 데이터 17",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 18,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 18",
    media: "미디어 데이터 18",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 19,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 19",
    media: "미디어 데이터 19",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 20,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 20",
    media: "미디어 데이터 20",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 21,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 21",
    media: "미디어 데이터 21",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 22,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 22",
    media: "미디어 데이터 22",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 23,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 23",
    media: "미디어 데이터 23",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 24,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 24",
    media: "미디어 데이터 24",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 25,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 25",
    media: "미디어 데이터 25",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 26,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 26",
    media: "미디어 데이터 26",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 27,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 27",
    media: "미디어 데이터 27",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 28,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 28",
    media: "미디어 데이터 28",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 29,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 29",
    media: "미디어 데이터 29",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 30,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 30",
    media: "미디어 데이터 30",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 31,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 31",
    media: "미디어 데이터 31",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 32,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 32",
    media: "미디어 데이터 32",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 33,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 33",
    media: "미디어 데이터 33",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 34,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 34",
    media: "미디어 데이터 34",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 35,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 35",
    media: "미디어 데이터 35",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 36,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 36",
    media: "미디어 데이터 36",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 37,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 37",
    media: "미디어 데이터 37",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 38,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 38",
    media: "미디어 데이터 38",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 39,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 39",
    media: "미디어 데이터 39",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 40,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 40",
    media: "미디어 데이터 40",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 41,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 41",
    media: "미디어 데이터 41",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 42,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 42",
    media: "미디어 데이터 42",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 43,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 43",
    media: "미디어 데이터 43",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 44,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 44",
    media: "미디어 데이터 44",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 45,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 45",
    media: "미디어 데이터 45",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 46,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 46",
    media: "미디어 데이터 46",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 47,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 47",
    media: "미디어 데이터 47",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 48,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 48",
    media: "미디어 데이터 48",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 49,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 49",
    media: "미디어 데이터 49",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 50,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 50",
    media: "미디어 데이터 50",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 51,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 51",
    media: "미디어 데이터 51",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 52,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 52",
    media: "미디어 데이터 52",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 53,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 53",
    media: "미디어 데이터 53",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 54,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 54",
    media: "미디어 데이터 54",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 55,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 55",
    media: "미디어 데이터 55",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 56,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 56",
    media: "미디어 데이터 56",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 57,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 57",
    media: "미디어 데이터 57",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 58,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 58",
    media: "미디어 데이터 58",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 59,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 59",
    media: "미디어 데이터 59",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 60,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 60",
    media: "미디어 데이터 60",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 61,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 61",
    media: "미디어 데이터 61",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 62,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 62",
    media: "미디어 데이터 62",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 63,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 63",
    media: "미디어 데이터 63",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 64,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 64",
    media: "미디어 데이터 64",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 65,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 65",
    media: "미디어 데이터 65",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 66,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 66",
    media: "미디어 데이터 66",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 67,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 67",
    media: "미디어 데이터 67",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 68,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 68",
    media: "미디어 데이터 68",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 69,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 69",
    media: "미디어 데이터 69",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 70,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 70",
    media: "미디어 데이터 70",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 71,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 71",
    media: "미디어 데이터 71",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 72,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 72",
    media: "미디어 데이터 72",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 73,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 73",
    media: "미디어 데이터 73",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 74,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 74",
    media: "미디어 데이터 74",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 75,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 75",
    media: "미디어 데이터 75",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 76,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 76",
    media: "미디어 데이터 76",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 77,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 77",
    media: "미디어 데이터 77",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 78,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 78",
    media: "미디어 데이터 78",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 79,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 79",
    media: "미디어 데이터 79",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 80,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 80",
    media: "미디어 데이터 80",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 81,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 81",
    media: "미디어 데이터 81",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 82,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 82",
    media: "미디어 데이터 82",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 83,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 83",
    media: "미디어 데이터 83",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 84,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 84",
    media: "미디어 데이터 84",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 85,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 85",
    media: "미디어 데이터 85",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 86,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 86",
    media: "미디어 데이터 86",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 87,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 87",
    media: "미디어 데이터 87",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 88,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 88",
    media: "미디어 데이터 88",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 89,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 89",
    media: "미디어 데이터 89",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 90,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 90",
    media: "미디어 데이터 90",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 91,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 91",
    media: "미디어 데이터 91",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 92,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 92",
    media: "미디어 데이터 92",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 93,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 93",
    media: "미디어 데이터 93",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 94,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "데이터 94",
    media: "미디어 데이터 94",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 95,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 95",
    media: "미디어 데이터 95",
    winRate: "50%",
    start: 5,
    end: 10
  },
  {
    id: 96,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH1",
    type: "youtube",
    name: "데이터 96",
    media: "미디어 데이터 96",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 97,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH2",
    type: "youtube",
    name: "데이터 97",
    media: "미디어 데이터 97",
    winRate: "70%",
    start: 5,
    end: 10
  },
  {
    id: 98,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH3",
    type: "youtube",
    name: "데이터 98",
    media: "미디어 데이터 98",
    winRate: "80%",
    start: 5,
    end: 10
  },
  {
    id: 99,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "데이터 99",
    media: "미디어 데이터 99",
    winRate: "90%",
    start: 5,
    end: 10
  },
  {
    id: 100,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH0",
    type: "youtube",
    name: "데이터 100",
    media: "미디어 데이터 100",
    winRate: "50%",
    start: 5,
    end: 10
  }
]
