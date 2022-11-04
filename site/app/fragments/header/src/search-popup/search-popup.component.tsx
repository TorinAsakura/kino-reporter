import React                         from 'react'
import { FC }                        from 'react'
import { useEffect }                 from 'react'

import { Condition }                 from '@ui/condition'
import { Divider }                   from '@ui/divider'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { updateSearchHistoryAction } from '@app/store'
import { useSearchValue }            from '@app/store'
import { useSearchHistory }          from '@app/store'

import { Results }                   from '../search'
import { SearchHistory }             from '../search'
import { WeRecommendReading }        from '../search'
import { MotionBox }                 from '../styles'

const SearchPopup: FC = () => {
  const searchValue = useSearchValue()
  const searchHistory = useSearchHistory()

  useEffect(() => {
    const searchHistoryStorage = window.localStorage.getItem('searchHistory')

    if (searchHistoryStorage) {
      updateSearchHistoryAction(searchHistoryStorage.split(',').reverse())
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('searchHistory', searchHistory.toString())
  }, [searchHistory])

  return (
    <Box
      width='100%'
      maxHeight={650}
      overflow='scroll'
      backgroundColor='white'
      boxShadow='grey'
      borderRadius='default'
    >
      <Layout flexBasis={24} flexShrink={0} />
      <Column fill>
        <Condition match={Boolean(searchHistory.length)}>
          <Layout flexBasis={24} />
          {searchHistory.slice(0, 5).map((title, index) => (
            <MotionBox
              key={title}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 60 }}
            >
              <Column height='auto'>
                <SearchHistory title={title} index={index} />
                <Layout flexBasis={searchHistory.length - 1 === index ? 24 : 20} />
              </Column>
            </MotionBox>
          ))}
          <Row>
            <Divider backgroundColor='lightBlack' />
          </Row>
        </Condition>
        <Layout flexBasis={24} />
        <Condition match={!searchValue.length}>
          <WeRecommendReading />
        </Condition>
        <Condition match={Boolean(searchValue.length)}>
          <Results />
        </Condition>
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}

export { SearchPopup }
