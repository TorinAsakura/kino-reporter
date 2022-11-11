import { useSearchValue } from '@app/store'

const useFilteredData = (data) => {
  const searchValue = useSearchValue()

  const lowerSearchValue = searchValue.toLowerCase()

  const filterByTitle = ({ title }) => {
    const lowerTitle = title.toLowerCase()

    if (lowerTitle.startsWith(lowerSearchValue) || lowerTitle.toLowerCase() === lowerSearchValue)
      return true
    if (!lowerTitle.startsWith(lowerSearchValue) || lowerTitle.toLowerCase() !== lowerSearchValue)
      return false

    return true
  }

  return data.filter(filterByTitle)
}

export { useFilteredData }
