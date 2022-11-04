import React                             from 'react'
import { FC }                            from 'react'

import { Button }                        from '@ui/button'
import { StatesConsumer }                from '@ui/button'
import { CloseIcon }                     from '@ui/icons'
import { RecentIcon }                    from '@ui/icons'
import { Layout }                        from '@ui/layout'
import { Row }                           from '@ui/layout'
import { NextLink }                      from '@ui/link'
import { Text }                          from '@ui/text'
import { removeItemSearchHistoryAction } from '@app/store'
import { updateSearchValueAction }       from '@app/store'
import { useSearchHistory }              from '@app/store'
import { getColor }                      from '@ui/button'

import { SearchHistoryProps }            from './search-history.interface'

const SearchHistory: FC<SearchHistoryProps> = ({ title, index }) => {
  const searchHistory = useSearchHistory()

  return (
    <Row alignItems='center'>
      <NextLink variant='secondary' path='/'>
        <Row alignItems='center' onClick={() => updateSearchValueAction(title)}>
          <Layout>
            <RecentIcon width={20} height={20} />
          </Layout>
          <Layout flexBasis={8} />
          <Layout width={240} overflow='hidden'>
            <Text fontWeight='medium' fontSize='small' lineHeight='compact'>
              {title}
            </Text>
          </Layout>
        </Row>
      </NextLink>
      <Layout flexGrow={1} />
      <Layout height={20}>
        <Button
          onClick={() => removeItemSearchHistoryAction(searchHistory, index)}
          variant='closeSearch'
          size='ghost'
          p={0}
          width={20}
          height={20}
        >
          <StatesConsumer>
            {({ hover, pressed }) => (
              <CloseIcon color={getColor('closeSearch', hover, pressed)} width={15} height={15} />
            )}
          </StatesConsumer>
        </Button>
      </Layout>
    </Row>
  )
}

export { SearchHistory }
