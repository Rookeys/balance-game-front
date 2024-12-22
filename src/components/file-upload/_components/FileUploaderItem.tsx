"use client"

import { Button } from "@/components/Button"
import { cn } from "@/utils/cn"
import { Trash2 as RemoveIcon } from "lucide-react"
import { forwardRef } from "react"
import { useFileUpload } from "./FileUploader"

export const FileUploaderItem = forwardRef<HTMLDivElement, { index: number } & React.HTMLAttributes<HTMLDivElement>>(
  ({ className, index, children, ...props }, ref) => {
    const { removeFileFromSet } = useFileUpload()
    return (
      <div ref={ref} className={cn("relative cursor-pointer", className)} {...props}>
        <div className="font-medium flex flex-wrap items-center justify-center w-full h-full">{children}</div>
        <Button
          type="button"
          variant="custom"
          className={cn("absolute bg-red-40 rounded-xsm top-1 right-1 p-1 ")}
          onClick={() => removeFileFromSet(index)}
        >
          <span className="sr-only">{index}번째 아이템 삭제</span>
          <RemoveIcon className="w-[16px] h-[16px]" />
        </Button>
      </div>
    )
  }
)
