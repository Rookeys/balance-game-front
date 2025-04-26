"use client"

import { cn } from "@/utils/cn"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Params {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  pageRangeDisplayed?: number // 기본값으로 5개 정도 추천
}

export function Pagination({ currentPage, totalPages, onPageChange, pageRangeDisplayed = 5 }: Params) {
  const half = Math.floor(pageRangeDisplayed / 2)
  let start = Math.max(1, currentPage - half)
  let end = Math.min(totalPages, currentPage + half)

  // 페이지가 끝에 가까운 경우 range 보정
  if (end - start + 1 < pageRangeDisplayed) {
    if (start === 1) {
      end = Math.min(totalPages, start + pageRangeDisplayed - 1)
    } else if (end === totalPages) {
      start = Math.max(1, end - pageRangeDisplayed + 1)
    }
  }

  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i)

  return (
    <section className="mt-[28px] flex w-full items-center justify-center gap-[8px]">
      <article className="flex max-w-[580px] items-center justify-between gap-[8px]">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] text-[14px] disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex items-center justify-between gap-[8px]">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "transition-color-custom h-[36px] w-[36px] rounded-[4px] border text-[14px]",
                currentPage === page ? "border-black bg-black text-white" : "hover:bg-gray-100"
              )}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] text-[14px] disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>
      </article>
    </section>
  )
}
