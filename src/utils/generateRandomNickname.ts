import { v4 as uuidv4 } from "uuid"

export const generateRandomNickname = () => {
  // 색상
  const colors = [
    "빨강",
    "파랑",
    "초록",
    "노랑",
    "보라",
    "주황",
    "핑크",
    "흰색",
    "검정",
    "회색",
    "청록",
    "갈색",
    "금색",
    "은색"
  ]

  // 타겟
  const objects = [
    "호랑이",
    "고양이",
    "강아지",
    "새",
    "꽃",
    "별",
    "구름",
    "바다",
    "산",
    "나무",
    "달",
    "눈",
    "불꽃",
    "하늘",
    "나비"
  ]

  // 랜덤 색상 선택
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  // 랜덤 타겟 선택
  const randomObject = objects[Math.floor(Math.random() * objects.length)]

  // uuid
  const randomUuid = uuidv4().slice(0, 4)

  // 랜덤 닉네임
  return `${randomColor}${randomObject}${randomUuid}`
}
