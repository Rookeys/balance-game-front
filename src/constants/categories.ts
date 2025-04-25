export const Categories = {
  FUN: "FUN",
  HORROR: "HORROR",
  HOT: "HOT",
  ACTION: "ACTION",
  ADVENTURE: "ADVENTURE",
  MYSTERY: "MYSTERY",
  FANTASY: "FANTASY",
  THRILLER: "THRILLER",
  SF: "SF",
  DRAMA: "DRAMA",
  ROMANCE: "ROMANCE",
  CRIME: "CRIME",
  SURVIVAL: "SURVIVAL"
} as const

export const categories: SelectOptionType[] = [
  { id: Categories.FUN, value: Categories.FUN, label: "재미" },
  { id: Categories.HORROR, value: Categories.HORROR, label: "공포" },
  { id: Categories.HOT, value: Categories.HOT, label: "인기" },
  { id: Categories.ACTION, value: Categories.ACTION, label: "액션" },
  { id: Categories.ADVENTURE, value: Categories.ADVENTURE, label: "모험" },
  { id: Categories.MYSTERY, value: Categories.MYSTERY, label: "미스터리" },
  { id: Categories.FANTASY, value: Categories.FANTASY, label: "판타지" },
  { id: Categories.THRILLER, value: Categories.THRILLER, label: "스릴러" },
  { id: Categories.SF, value: Categories.SF, label: "SF" },
  { id: Categories.DRAMA, value: Categories.DRAMA, label: "드라마" },
  { id: Categories.ROMANCE, value: Categories.ROMANCE, label: "로맨스" },
  { id: Categories.SURVIVAL, value: Categories.SURVIVAL, label: "서바이벌" }
]
