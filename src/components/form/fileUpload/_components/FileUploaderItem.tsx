"use client"

import { Button } from "@/components/Button"
import { cn } from "@/utils/cn"
import { Trash2 as RemoveIcon } from "lucide-react"
import { useFileUpload } from "./FileUploader"

export const FileUploaderItem = ({
  className,
  index,
  children,
  ...props
}: { index: number } & React.HTMLAttributes<HTMLDivElement>) => {
  const { removeFileFromSet } = useFileUpload()
  return (
    <div className={cn("relative cursor-pointer", className)} {...props}>
      <div className="flex h-full w-full flex-wrap items-center justify-center font-medium">{children}</div>
      <Button
        type="button"
        variant="custom"
        className={cn("absolute end-[4px] top-[4px] rounded-[8px] bg-red-400 p-[4px]")}
        onClick={() => removeFileFromSet(index)}
      >
        <span className="sr-only">{index}번째 아이템 삭제</span>
        <RemoveIcon className="h-[16px] w-[16px]" />
      </Button>
    </div>
  )
}
