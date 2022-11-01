import { makeVar }       from '@apollo/client'

import { SearchHistory } from './search.interfaces'

export const searchHistoryVar = makeVar<SearchHistory>([])
