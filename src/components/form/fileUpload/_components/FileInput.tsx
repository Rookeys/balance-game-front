"use client"

import { cn } from "@/utils/cn"
import { useFileUpload } from "./FileUploader"

interface Params extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: boolean
}

export const FileInput = ({ className, children, rounded = true, ...props }: Params) => {
  const { dropzoneState, isLimit } = useFileUpload()
  const rootProps = isLimit ? {} : dropzoneState.getRootProps()

  return (
    <div {...props} className={cn("relative w-full", isLimit ? "cursor-not-allowed opacity-50" : "cursor-pointer")}>
      <div
        className={cn("w-full transition-colors duration-300 ease-in-out", className, rounded && "rounded-lg")}
        {...rootProps}
      >
        {children}
        {dropzoneState.isDragActive && (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center backdrop-blur-sm",
              rounded && "rounded-lg"
            )}
          >
            <p className="font-medium text-blue-500">여기에 업로드 하세요 🚀</p>
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
}
