import { searchHistoryVar } from './search.vars'

export const addSearchHistory = (searchHistory: string[], history: string) =>
  searchHistoryVar([...searchHistory, history])

export const updateSearchHistory = (searchHistory: string[]) => searchHistoryVar(searchHistory)
