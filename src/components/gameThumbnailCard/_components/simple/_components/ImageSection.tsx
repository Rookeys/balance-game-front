import Image from "next/image"

interface Params {
  src?: string
  tag?: string
}

export default function ImageSection({ src, tag }: Params) {
  return (
    <article className="relative h-[158px] overflow-hidden rounded-[12px] bg-gray-10 md:h-[228px]">
      <Image
        src={src ?? "/"}
        className="object-contain object-center"
        // className="object-cover object-center"
        alt="Game-Thumbnail"
        fill
        sizes="(max-width: 768px) 182px, 285px"
        placeholder="blur"
        blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
      />
      {tag && <div className="absolute start-[12px] top-[12px] rounded-[4px] bg-gray-50 px-[8px] py-[4px]">{tag}</div>}
    </article>
  )
}
