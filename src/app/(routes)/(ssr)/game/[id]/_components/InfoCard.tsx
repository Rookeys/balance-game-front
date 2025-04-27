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
  if (props.type === "creator") {
    return (
      <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
        <p>{props.title}</p>
        <div className="flex items-center gap-[12px]">
          <Image
            src={props.creatorProfile}
            width={40}
            height={40}
            className="h-[40px] w-[40px] rounded-full"
            alt="creator-image"
            // placeholder="blur"
            // blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
          />
          <p className="line-clamp-1">{props.creatorName}</p>
        </div>
      </div>
    )
  }

  // category일 경우
  return (
    <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
      <p>{props.title}</p>
      <div className="flex items-center gap-[12px]">
        {props.items?.map((item, idx) => (
          <p key={idx} className="rounded-[4px] bg-gray-100 px-[8px] py-[4px]">
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}
