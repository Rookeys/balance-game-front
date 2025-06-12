export function generateRounds(totalItem: number): SelectOptionType<number>[] {
  const items: SelectOptionType<number>[] = []
  let power = 2

  while (power <= totalItem) {
    items.push({
      id: power,
      value: power,
      label: `${power}강`
    })
    power *= 2 // 2배씩 증가
  }

  return items
}
