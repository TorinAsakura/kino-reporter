import React                  from 'react'
import { FC }                 from 'react'

import { Button }             from '@ui/button'
import { CloseIcon }          from '@ui/icons'
import { RecentIcon }         from '@ui/icons'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'

import { SearchHistoryProps } from './search-history.interface'

const SearchHistory: FC<SearchHistoryProps> = ({ title }) => (
  <Row alignItems='center'>
    <Layout>
      <RecentIcon width={20} height={20} />
    </Layout>
    <Layout flexBasis={8} />
    <Layout>
      <Text fontWeight='medium' fontSize='small' lineHeight='compact'>
        {title}
      </Text>
    </Layout>
    <Layout flexGrow={1} />
    <Layout height={20}>
      <Button variant='closeSearch' size='ghost' p={0} width={20} height={20}>
        <CloseIcon width={20} height={20} />
      </Button>
    </Layout>
  </Row>
)

export { SearchHistory }
