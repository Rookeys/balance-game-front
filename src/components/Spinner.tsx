export const Spinner = () => {
  return (
    <div
      className="fixed inset-0 z-[99] flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* 투명 오버레이 (클릭 차단용) */}
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative z-10 flex items-center justify-center rounded-[16px] bg-neutral-900/70 p-[12px] shadow-md">
        <div className="h-[64px] w-[64px] animate-spin rounded-full border-[4px] border-dashed border-primary border-t-transparent" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  )
}

// export const Spinner = () => {
//   return (
//     <div
//       className="fixed left-1/2 top-1/2 z-[99] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
//       role="status"
//       aria-live="polite"
//       aria-busy="true"
//     >
//       <div className="flex items-center justify-center rounded-[16px] bg-neutral-900/70 p-[12px] shadow-md">
//         <div className="h-[64px] w-[64px] animate-spin rounded-full border-[4px] border-dashed border-primary border-t-transparent" />
//       </div>
//       <span className="sr-only">Loading...</span>
//     </div>
//   )
// }

// export const Spinner = () => {
//   return (
//     <div
//       className="fixed left-1/2 top-1/2 z-[99] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
//       role="status"
//       aria-live="polite"
//       aria-busy="true"
//     >
//       <div className="h-[64px] w-[64px] animate-spin rounded-full border-[4px] border-dashed border-primary border-t-transparent" />
//       <span className="sr-only">Loading...</span>
//     </div>
//   )
// }

// export const Spinner = () => {
//   return (
//     <div
//       className="fixed inset-0 z-[99] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//       role="status"
//       aria-live="polite"
//       aria-busy="true"
//     >
//       <div className="h-[64px] w-[64px] animate-spin rounded-full border-[4px] border-dashed border-primary border-t-transparent" />
//       <span className="sr-only">Loading...</span>
//     </div>
//   )
// }
