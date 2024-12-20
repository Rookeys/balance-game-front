
export function ActionButtons() {
  return (
    <article className="flex flex-wrap">
      <button className="bg-primary hover:bg-primary-60 text-light px-4 py-2 rounded-xsm text-sm dark:bg-primary-70 dark:hover:bg-primary-80">
        게임시작
      </button>
      <button className="bg-gray-10 hover:bg-gray-20 text-dark-30 px-4 py-2 rounded-xsm text-sm dark:bg-gray-70 dark:hover:bg-gray-80 dark:text-light">
        🔥 랭킹확인
      </button>
      <button className="bg-blue hover:bg-blue-60 text-light px-4 py-2 rounded-xsm text-sm dark:bg-blue-70 dark:hover:bg-blue-80">
        공유하기
      </button>
    </article>
  )
}
