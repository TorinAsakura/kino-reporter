const getRandomItem = (items: string[] | number[]): string | number => {
  const randomIndex = Math.floor(Math.random() * items.length)

  return items[randomIndex]
}

export { getRandomItem }
