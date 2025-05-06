export const Categories = {
  DAILY: "DAILY",
  FOOD: "FOOD",
  LOVE: "LOVE",
  FUN: "FUN",
  DRAMA: "DRAMA",
  MOVIE: "MOVIE",
  SONG: "SONG",
  CELEBRITY: "CELEBRITY",
  ANIMAL: "ANIMAL",
  ANIMATION: "ANIMATION",
  HORROR: "HORROR",
  ETC: "ETC"
} as const

export const categories: SelectOptionType[] = [
  { id: Categories.DAILY, value: Categories.DAILY, label: "일상" },
  { id: Categories.FOOD, value: Categories.FOOD, label: "음식" },
  { id: Categories.LOVE, value: Categories.LOVE, label: "사랑" },
  { id: Categories.FUN, value: Categories.FUN, label: "재미" },
  { id: Categories.DRAMA, value: Categories.DRAMA, label: "드라마" },
  { id: Categories.MOVIE, value: Categories.MOVIE, label: "영화" },
  { id: Categories.SONG, value: Categories.SONG, label: "음악" },
  { id: Categories.CELEBRITY, value: Categories.CELEBRITY, label: "연예인" },
  { id: Categories.ANIMAL, value: Categories.ANIMAL, label: "동물" },
  { id: Categories.ANIMATION, value: Categories.ANIMATION, label: "애니" },
  { id: Categories.HORROR, value: Categories.HORROR, label: "공포" },
  { id: Categories.ETC, value: Categories.ETC, label: "기타" }
]
