import { makeVar }       from '@apollo/client'

import { SearchHistory } from './search.interfaces'
import { SearchValue }   from './search.interfaces'

export const searchValueVar = makeVar<SearchValue>('')
export const searchHistoryVar = makeVar<SearchHistory>([])
