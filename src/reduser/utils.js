export function arrToObj(arr) {
  return arr.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item
    }),
    {}
  )
}
