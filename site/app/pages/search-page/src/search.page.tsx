import React          from 'react'

import { Header }     from '@app/header-fragment'
import { SearchTabs } from '@app/search-tabs-fragment'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'

const SearchPage = () => (
  <Column fill>
    <Layout display={['none', 'none', 'flex']}>
      <Header />
    </Layout>
    <Layout flexBasis={[0, 0, 88]} />
    <SearchTabs />
  </Column>
)

export default SearchPage
