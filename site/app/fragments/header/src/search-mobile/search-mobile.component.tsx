import React                         from 'react'
import { FC }                        from 'react'
import { useEffect }                 from 'react'
import { useIntl }                   from 'react-intl'

import { Condition }                 from '@ui/condition'
import { Input }                     from '@ui/input'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { addSearchHistoryAction }    from '@app/store'
import { updateSearchHistoryAction } from '@app/store'
import { updateSearchValueAction }   from '@app/store'
import { useSearchHistory }          from '@app/store'
import { useSearchValue }            from '@app/store'

import { Results }                   from '../search'
import { SearchHistory }             from '../search'
import { WeRecommendReading }        from '../search'
import { MotionBox }                 from '../styles'

const SearchMobile: FC = () => {
  const intl = useIntl()

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addSearchHistoryAction(searchHistory, searchValue)
    }
  }

  return (
    <Box
      width='100%'
      minHeight='100vh'
      maxHeight='100vh'
      overflow='scroll'
      backgroundColor='background.white'
    >
      <Layout flexBasis={16} flexShrink={0} />
      <Column fill height='100vh'>
        <Layout flexBasis={8} />
        <Row>
          <Layout width='100%'>
            <Input
              type='search'
              value={searchValue}
              onChange={updateSearchValueAction}
              onKeyDown={handleKeyPress}
              placeholder={intl.formatMessage({
                id: 'header.materials_films_persons',
                defaultMessage: 'Материалы, фильмы, персоны...',
              })}
            />
          </Layout>
        </Row>
        <Condition match={Boolean(searchHistory.length)}>
          <Layout flexBasis={24} />
          {searchHistory.slice(0, 5).map((title, index) => (
            <MotionBox
              key={title}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Column height='auto'>
                <SearchHistory title={title} index={index} />
                <Layout flexBasis={searchHistory.slice(0, 5).length - 1 === index ? 0 : 20} />
              </Column>
            </MotionBox>
          ))}
        </Condition>
        <Layout flexBasis={24} />
        <Condition match={!searchValue.length}>
          <WeRecommendReading />
        </Condition>
        <Condition match={Boolean(searchValue.length)}>
          <Results />
        </Condition>
      </Column>
      <Layout flexBasis={16} flexShrink={0} />
    </Box>
  )
}

export { SearchMobile }
