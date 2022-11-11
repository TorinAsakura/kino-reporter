import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'

import { News }       from './news'
import { Selections } from './selections'

const SelectionsAndNews: FC = () => (
  <Box width='100%' justifyContent='center'>
    <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
    <Column fill maxWidth={1280}>
      <Layout flexBasis={[0, 0, 48]} />
      <Row>
        <Selections />
        <Layout flexBasis={[0, 0, 32]} flexShrink={0} />
        <Layout display={['none', 'none', 'flex']}>
          <News />
        </Layout>
      </Row>
      <Layout flexBasis={[20, 20, 16]} />
    </Column>
    <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
  </Box>
)

export { SelectionsAndNews }
