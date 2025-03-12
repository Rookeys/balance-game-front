import { Play } from "lucide-react"
import Image from "next/image"

export default function MetaInfoSection() {
  return (
    <article className="flex flex-col justify-between lg:flex-row">
      <div className="flex items-center gap-[4px]">
        <Image
          src={"/images/Rookeys.png"}
          width={24}
          height={24}
          className="rounded-full"
          alt="creator-profile"
          placeholder="blur"
          blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
        />
        <p className="line-clamp-1">닉네임이들어갈영역입니다</p>
      </div>
      <div className="flex items-center">
        <Play size={24} />
        <p>9999</p>
      </div>
    </article>
  )
}
