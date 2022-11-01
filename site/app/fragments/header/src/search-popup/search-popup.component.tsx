import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'
import { useEffect }           from 'react'

import { Condition }           from '@ui/condition'
import { Divider }             from '@ui/divider'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { updateSearchHistory } from '@app/store'
import { useSearchHistory }    from '@app/store'

import { SearchHistory }       from './search-history'

const SearchPopup: FC = () => {
  const searchHistory = useSearchHistory()

  useEffect(() => {
    const searchHistoryStorage = window.localStorage.getItem('searchHistory')

    if (searchHistoryStorage) {
      updateSearchHistory(searchHistoryStorage.replace(/\[|\]/, '').split(','))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('searchHistory', searchHistory.toString())
  }, [searchHistory])

  return (
    <Box width='100%' backgroundColor='white' boxShadow='grey' borderRadius='default'>
      <Layout flexBasis={24} flexShrink={0} />
      <Column fill>
        <Layout flexBasis={24} />
        <Condition match={searchHistory.length}>
          {searchHistory.map((title, index) => (
            <Column key={title} width='100%' height='auto'>
              <SearchHistory title={title} />
              <Layout flexBasis={searchHistory.length - 1 === index ? 24 : 20} />
            </Column>
          ))}
        </Condition>
        <Row>
          <Divider backgroundColor='lightBlack' />
        </Row>
        <Layout flexBasis={24} />
        <Column height='auto'>
          <Row>
            <Text
              textTransform='uppercase'
              fontWeight='medium'
              color='text.tertiary'
              fontSize='atomic'
            >
              <FormattedMessage
                id='header.we_recommend_reading'
                defaultMessage='Советуем почитать'
              />
            </Text>
          </Row>
          <Layout flexBasis={24} />
          <Row>
            <Box minWidth={72} height={60} backgroundColor='gray' borderRadius='intermediate' />
            <Layout flexBasis={16} flexShrink={0} />
            <Column height='auto'>
              <Layout flexBasis={2} />
              <Row>
                <Text
                  textTransform='uppercase'
                  fontSize='micro'
                  fontWeight='semiBold'
                  color='text.accent'
                >
                  Текст
                </Text>
              </Row>
              <Layout flexBasis={8} />
              <Row>
                <Text fontSize='default' lineHeight='extra'>
                  Никита Михалков заканчивает сценарий нового фильма
                </Text>
              </Row>
            </Column>
          </Row>
        </Column>
        <Condition match={!searchHistory.length}>
          <Row>
            <Text color='text.tertiary' fontSize='default' lineHeight='small'>
              <FormattedMessage
                id='header.no_matches_found'
                defaultMessage='Совпадений не найдено'
              />
            </Text>
          </Row>
        </Condition>
        <Layout flexBasis={24} />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}

export { SearchPopup }
