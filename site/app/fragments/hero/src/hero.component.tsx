import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'

import { Articles }    from './articles'
import { MainPreview } from './main-preview'

const Hero: FC = () => (
  <Box width='100%'>
    <Layout flexBasis={[0, 0, 80]} />
    <Column fill>
      <Layout flexBasis={[0, 0, 48]} />
      <Box width='100%' flexDirection={['column', 'column', 'row']} justifyContent='center'>
        <MainPreview />
        <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
        <Layout justifyContent='center'>
          <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
          <Articles />
          <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
        </Layout>
      </Box>
    </Column>
    <Layout flexBasis={[0, 0, 80]} />
  </Box>
)

export { Hero }
