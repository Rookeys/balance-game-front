import ResourceForm from "./_components/ResourceForm"

export default function ResourcePage() {
  return (
    <section className="flex justify-center">
      <section className="flex flex-col overflow-x-auto border-x border-t border-dark text-center dark:border-gray">
        {/* Header */}
        <article
          // "grid grid-cols-[1fr_1fr_2fr_1fr_1fr] bg-gray-20 dark:bg-gray-80 border-b border-dark dark:border-gray"
          className="flex w-fit border-b border-dark bg-gray-20 dark:border-gray dark:bg-gray-80"
        >
          <div className="w-[180px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">썸네일</div>
          <div className="w-[180px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">이름</div>
          <div className="w-[360px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">미디어</div>
          <div className="w-[180px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">우승비율</div>
          <div className="w-[180px] flex-shrink-0 p-4">수정 및 삭제</div>
        </article>

        {/* Body */}
        <ResourceForm />
      </section>
    </section>
  )
}
