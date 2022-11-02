import React         from 'react'

import { Header }    from '@app/header-fragment'
import { PromoLine } from '@app/header-fragment'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

const IndexPage = () => (
  <Column fill>
    <Header />
    <Layout flexBasis={[64, 64, 88]} />
    <PromoLine />
    <Layout height='2000px' />
  </Column>
)

export { IndexPage }
