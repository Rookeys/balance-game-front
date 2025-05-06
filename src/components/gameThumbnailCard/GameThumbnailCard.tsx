// import { GameListResponse } from "@/api/orval/model/gameListResponse"
// import ImageSection from "./_components/basic/ImageSection"
// import MetaInfoSection from "./_components/common/MetaInfoSection"
// import TitleSection from "./_components/common/TitleSection"
// import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
// import { GameListSelectionResponseType } from "@/api/orval/model/gameListSelectionResponseType"
// import SocialActionSection from "./_components/common/SocialActionSection"
// import Link from "next/link"
// import { motion } from "motion/react"

// interface Params extends GameListResponse {
//   index: number
// }

// export default function GameThumbnailCard({ index, ...props }: Params) {
//   const { roomId, leftSelection, title, description, categories, userResponse, totalPlayNums, existsBlind } = props

//   return (
//     <Link href={`/game/${roomId}`} className="">
//       <motion.div
//         className="flex w-[272px] flex-col gap-[12px] md:w-[384px]"
//         whileHover={{ scale: 0.99 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       >
//         <ImageSection
//           src={
//             leftSelection?.type === GameListSelectionResponseType.LINK
//               ? getYoutubeThumbnail(leftSelection?.content)
//               : leftSelection?.content
//           }
//           index={index}
//           isBlind={existsBlind}
//           totalPlayNums={totalPlayNums}
//         />
//         <SocialActionSection id={roomId} title={title} categories={categories} />
//         <TitleSection title={title} description={description} />
//         <MetaInfoSection creatorNickname={userResponse?.nickname} creatorImage={userResponse?.profileImageUrl} />
//       </motion.div>
//     </Link>
//   )
// }

import { GameListResponse } from "@/api/orval/model/gameListResponse"
import ImageSection from "./_components/basic/ImageSection"
import MetaInfoSection from "./_components/common/MetaInfoSection"
import TitleSection from "./_components/common/TitleSection"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { GameListSelectionResponseType } from "@/api/orval/model/gameListSelectionResponseType"
import SocialActionSection from "./_components/common/SocialActionSection"
import Link from "next/link"

interface Params extends GameListResponse {
  index: number
}

export default function GameThumbnailCard({ index, ...props }: Params) {
  const {
    roomId,
    leftSelection,
    title,
    description,
    categories,
    userResponse,
    totalPlayNums,
    existsBlind,
    existsMine
  } = props

  return (
    <Link href={`/game/${roomId}`} className="group flex w-[272px] flex-col gap-[12px] md:w-[384px]">
      <ImageSection
        src={
          leftSelection?.type === GameListSelectionResponseType.LINK
            ? getYoutubeThumbnail(leftSelection?.content)
            : leftSelection?.content
        }
        index={index}
        isBlind={existsBlind}
        totalPlayNums={totalPlayNums}
      />
      <SocialActionSection id={roomId} title={title} categories={categories} isMine={existsMine} />
      <TitleSection title={title} description={description} />
      <MetaInfoSection creatorNickname={userResponse?.nickname} creatorImage={userResponse?.profileImageUrl} />
    </Link>
  )
}
