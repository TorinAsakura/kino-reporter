const getColor = (hover: boolean, id: string, selectedTab: string): string => {
  if (hover) return 'text.accent'
  if (id !== selectedTab) return 'text.tertiary'
  if (id === selectedTab) return 'text.primary'

  return 'text.secondary'
}

export { getColor }
