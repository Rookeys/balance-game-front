export function calculateWinRate(winningNums: number = 0, totalPlayNums: number = 1): string {
  if (totalPlayNums === 0) return "0.00"

  const rate = (winningNums / totalPlayNums) * 100
  return `${rate.toFixed(2)}`
}
