import { cn } from "@/utils/cn"

interface Params {
  onClick: () => void
  title?: string
  selected?: boolean
}

export default function SelectResourceButton({ onClick, title, selected }: Params) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-[12px] border-[2px] bg-primary-alternative px-[16px] py-[12px]",
        selected ? "border-animation relative" : "border-primary-normal"
      )}
      onClick={onClick}
    >
      <p className="line-clamp-2 break-all text-center font-sb-aggro-medium text-heading-6 text-label-normal md:text-heading-5">
        {title || "\u00A0"}
      </p>
    </button>
  )
}
