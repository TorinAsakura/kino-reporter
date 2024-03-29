import React                 from 'react'

import { FilmsAndSerials }   from '@app/films-and-serials-fragment'
import { Footer }            from '@app/footer-fragment'
import { Header }            from '@app/header-fragment'
import { PromoLine }         from '@app/header-fragment'
import { Hero }              from '@app/hero-fragment'
import { Interviews }        from '@app/interviews-fragment'
import { Journal }           from '@app/journal-fragment'
import { MainEditor }        from '@app/main-editor-fragment'
import { Newsletter }        from '@app/newsletter-fragment'
import { Reviews }           from '@app/reviews-fragment'
import { SelectionsAndNews } from '@app/selections-and-news-fragment'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'

const IndexPage = () => (
  <Column fill>
    <Header />
    <PromoLine />
    <Layout flexBasis={[96, 96, 120]} />
    <Hero />
    <MainEditor />
    <Reviews />
    <SelectionsAndNews />
    <Interviews />
    <FilmsAndSerials />
    <Newsletter />
    <Journal />
    <Footer />
  </Column>
)

export { IndexPage }
