"use client"

import { cn } from "@/utils/cn"
import { forwardRef } from "react"
import { useFileUpload } from "./FileUploader"

interface FileInputProps extends React.HTMLAttributes<HTMLDivElement> {}
export const FileInput = forwardRef<HTMLDivElement, FileInputProps>(({ className, children, ...props }, ref) => {
  const { dropzoneState, isLimit } = useFileUpload()
  const rootProps = isLimit ? {} : dropzoneState.getRootProps()

  return (
    <div
      ref={ref}
      {...props}
      className={cn("relative w-full", isLimit ? "opacity-50 cursor-not-allowed" : "cursor-pointer")}
    >
      <div className={cn("w-full rounded-lg transition-colors duration-300 ease-in-out", className)} {...rootProps}>
        {children}
        {dropzoneState.isDragActive && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm rounded-lg">
            <p className="text-blue font-medium">여기에 업로드 하세요 🚀</p>
          </div>
        )}
      </div>
      <input
        ref={dropzoneState.inputRef}
        disabled={isLimit}
        {...dropzoneState.getInputProps()}
        className={cn(isLimit && "cursor-not-allowed")}
      />
    </div>
  )
})
