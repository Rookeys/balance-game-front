import CategoryLabel from "@/components/CategoryLabel"
import Image from "next/image"

interface BaseProps {
  type: "creator" | "category"
  title: string
}

interface CreatorProps extends BaseProps {
  type: "creator"
  creatorProfile: string
  creatorName: string
}

interface CategoryProps extends BaseProps {
  type: "category"
  items?: string[]
}

type Props = CreatorProps | CategoryProps
export default function InfoCard(props: Props) {
  return (
    <div className="flex h-[108px] w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
      {props.type === "creator" ? (
        <>
          <p className="text-label- text-body-bold">{props.title}</p>
          <div className="flex items-center gap-[12px]">
            <Image
              src={props.creatorProfile}
              width={40}
              height={40}
              className="h-[40px] w-[40px] rounded-full"
              alt="creator-image"
            />
            <p className="line-clamp-1 text-label-regular text-label-normal">{props.creatorName}</p>
          </div>
        </>
      ) : (
        <>
          <p className="text-body-bold text-label-normal">{props.title}</p>
          <div className="flex items-center gap-[12px]">
            {props.items?.map((item, index) => <CategoryLabel key={`${item}-${index}`} text={item} />)}
          </div>
        </>
      )}
    </div>
  )
}
