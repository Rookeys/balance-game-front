import GameThumbnailCard from "@/components/gameThumbnail/GameThumbnailCard"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof GameThumbnailCard> = {
  title: "GameThumbnailCard",
  component: GameThumbnailCard,
  tags: ["autodocs"],
  args: {
    roomId: 1,
    title: "⭐️게임 타이틀",
    description: "📝게임에 대한 설명UI는 이쪽에 하면 될것으로 보임",
    leftSelection: {
      title: "고재민",
      type: "IMAGE",
      content: "https://avatars.githubusercontent.com/u/62785823?v=4"
    },
    rightSelection: {
      title: "박현호",
      type: "IMAGE",
      content: "https://avatars.githubusercontent.com/u/84797433?v=4"
    },
    nickname: "KoJaem & Cheomuk"
  },
  argTypes: {
    leftSelection: {
      description: "왼쪽 썸네일 데이터"
    },
    rightSelection: {
      description: "오른쪽 썸네일 데이터"
    },
    roomId: {
      table: { disable: true }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `GameThumbnailCard 컴포넌트는 등록된 게임에 대한 간단한 정보와 게임시작, 랭킹확인, 공유하기 기능을 제공하는 컴포넌트 입니다.`
      }
    },
    nextjs: {
      appDirectory: true
    }
  }
}

export default meta
type Story = StoryObj<typeof GameThumbnailCard>

export const Default: Story = {}
