import React         from 'react'

import { Header }    from '@app/header-fragment'
import { PromoLine } from '@app/header-fragment'
import { Column }    from '@ui/layout'

const IndexPage = () => (
  <Column fill>
    <Header />
    <PromoLine />
  </Column>
)

export { IndexPage }
