import type { Meta, StoryObj } from "@storybook/react"
import GameThumbnailCard from "./GameThumbnailCard"

const meta: Meta<typeof GameThumbnailCard> = {
  title: "GameThumbnailCard",
  component: GameThumbnailCard,
  tags: ["autodocs"],
  args: {
    id: "1",
    firstItemThumbnail: "https://avatars.githubusercontent.com/u/62785823?v=4",
    firstItemTitle: "고재민",
    secondItemThumbnail: "https://avatars.githubusercontent.com/u/84797433?v=4",
    secondItemTitle: "박현호",
    gameTitle: "⭐️게임 타이틀",
    gameDescription: "📝게임에 대한 설명UI는 이쪽에 하면 될것으로 보임",
    creator: "KoJaem & Cheomuk"
  },
  argTypes: {
    firstItemThumbnail: {
      description: "1등 이미지 주소"
    },
    firstItemTitle: {
      description: "1등 이미지 이름"
    },
    secondItemThumbnail: {
      description: "2등 이미지 주소"
    },
    secondItemTitle: {
      description: "2등 이미지 이름"
    },
    gameTitle: {
      description: "게임 제목"
    },
    gameDescription: {
      description: "게임에 대한 설명"
    },
    creator: {
      description: "게임 제작자 닉네임"
    }
  },
  parameters: {
    docs: {
      description: {
        component: `GameThumbnailCard 컴포넌트는 등록된 게임에 대한 간단한 정보와 게임시작, 랭킹확인, 공유하기 기능을 제공하는 컴포넌트 입니다.`
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof GameThumbnailCard>

export const Default: Story = {}
