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
        "text-heading-6",
        "text-body1-regular",
        "text-body1-medium",
        "text-body1-bold",
        "text-body2-regular",
        "text-body2-medium",
        "text-body2-bold",
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
