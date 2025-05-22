import { GameRequestCategoriesItem } from "@/api/orval/model/gameRequestCategoriesItem"

// export const Categories = {
//   DAILY: "DAILY",
//   FOOD: "FOOD",
//   LOVE: "LOVE",
//   FUN: "FUN",
//   DRAMA: "DRAMA",
//   MOVIE: "MOVIE",
//   SONG: "SONG",
//   CELEBRITY: "CELEBRITY",
//   ANIMAL: "ANIMAL",
//   ANIMATION: "ANIMATION",
//   HORROR: "HORROR",
//   ETC: "ETC"
// } as const

export const categories: SelectOptionType[] = [
  { id: GameRequestCategoriesItem.DAILY, value: GameRequestCategoriesItem.DAILY, label: "일상" },
  { id: GameRequestCategoriesItem.FOOD, value: GameRequestCategoriesItem.FOOD, label: "음식" },
  { id: GameRequestCategoriesItem.LOVE, value: GameRequestCategoriesItem.LOVE, label: "사랑" },
  { id: GameRequestCategoriesItem.FUN, value: GameRequestCategoriesItem.FUN, label: "재미" },
  { id: GameRequestCategoriesItem.DRAMA, value: GameRequestCategoriesItem.DRAMA, label: "드라마" },
  { id: GameRequestCategoriesItem.MOVIE, value: GameRequestCategoriesItem.MOVIE, label: "영화" },
  { id: GameRequestCategoriesItem.SONG, value: GameRequestCategoriesItem.SONG, label: "음악" },
  { id: GameRequestCategoriesItem.CELEBRITY, value: GameRequestCategoriesItem.CELEBRITY, label: "연예인" },
  { id: GameRequestCategoriesItem.ANIMAL, value: GameRequestCategoriesItem.ANIMAL, label: "동물" },
  { id: GameRequestCategoriesItem.ANIMATION, value: GameRequestCategoriesItem.ANIMATION, label: "애니" },
  { id: GameRequestCategoriesItem.HORROR, value: GameRequestCategoriesItem.HORROR, label: "공포" },
  { id: GameRequestCategoriesItem.ETC, value: GameRequestCategoriesItem.ETC, label: "기타" }
]
