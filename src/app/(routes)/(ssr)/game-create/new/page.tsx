import GameForm from "@/components/form/gameRoom/GameForm"
import GameCreateInfoModal from "./GameCreateInfoModal"

export default function GameCreatePage() {
  return (
    <section className="mb-[80px] flex flex-col justify-center md:mb-[120px] md:mt-[40px] md:flex-row">
      <GameForm />
      <GameCreateInfoModal />
    </section>
  )
}
