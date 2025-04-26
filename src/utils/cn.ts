import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTWMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-heading-1",
        "text-heading-2",
        "text-heading-3",
        "text-heading-4",
        "text-heading-5",
        "text-body-regular",
        "text-body-medium",
        "text-body-bold",
        "text-label-regular",
        "text-label-medium",
        "text-label-bold",
        "text-caption1-regular",
        "text-caption1-medium",
        "text-caption1-bold",
        "text-caption2-regular",
        "text-caption2-medium",
        "text-caption2-bold"
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTWMerge(clsx(inputs))
}
