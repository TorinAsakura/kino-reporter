import React          from 'react'

import { Header }     from '@app/header-fragment'
import { PromoLine }  from '@app/header-fragment'
import { Hero }       from '@app/hero-fragment'
import { MainEditor } from '@app/main-editor-fragment'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'

const IndexPage = () => (
  <Column fill>
    <Header />
    <PromoLine />
    <Layout flexBasis={[96, 96, 120]} />
    <Hero />
    <MainEditor />
  </Column>
)

export { IndexPage }
