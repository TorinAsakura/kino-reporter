import { searchHistoryVar } from './search.vars'
import { searchValueVar }   from './search.vars'

export const addSearchHistoryAction = (searchHistory: string[], history: string) =>
  searchHistoryVar([...searchHistory, history])

export const updateSearchHistoryAction = (searchHistory: string[]) =>
  searchHistoryVar(searchHistory)

export const removeItemSearchHistoryAction = (searchHistory: string[], history) =>
  updateSearchHistoryAction(searchHistory.filter((item) => item !== history))

export const updateSearchValueAction = (value: string) => searchValueVar(value)
