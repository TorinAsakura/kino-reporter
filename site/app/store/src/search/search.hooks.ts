import { useReactiveVar }   from '@apollo/client'

import { SearchHistory }    from './search.interfaces'
import { searchHistoryVar } from './search.vars'

export const useSearchHistory = () => useReactiveVar<SearchHistory>(searchHistoryVar)
