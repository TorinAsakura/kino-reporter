import { useReactiveVar }   from '@apollo/client'

import { SearchHistory }    from './search.interfaces'
import { SearchValue }      from './search.interfaces'
import { searchHistoryVar } from './search.vars'
import { searchValueVar }   from './search.vars'

export const useSearchHistory = () => useReactiveVar<SearchHistory>(searchHistoryVar)
export const useSearchValue = () => useReactiveVar<SearchValue>(searchValueVar)
