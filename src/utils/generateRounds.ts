export function generateRounds(totalItem: number): SelectOptionType[] {
  const items: SelectOptionType[] = []
  let power = 2

  while (power <= totalItem) {
    items.push({
      id: power,
      value: power.toString(),
      label: `${power}강`
    })
    power *= 2 // 2배씩 증가
  }

  return items
}
