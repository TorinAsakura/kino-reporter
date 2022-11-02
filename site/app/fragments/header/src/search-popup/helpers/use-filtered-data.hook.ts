import { useSearchValue } from '@app/store'

const useFilteredData = (data) => {
  const searchValue = useSearchValue()

  const filterBy = ({ title }) => {
    if (title.toLowerCase() === searchValue.toLowerCase()) return true
    if (title.toLowerCase() !== searchValue.toLowerCase()) return false

    return true
  }

  return data.filter(filterBy)
}

export { useFilteredData }
