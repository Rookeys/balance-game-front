export function getMaxRound(totalItem?: number): number {
  if (!totalItem || totalItem === 0) {
    return 0
  }

  let power = 1

  while (power * 2 <= totalItem) {
    power *= 2
  }

  return power
}
