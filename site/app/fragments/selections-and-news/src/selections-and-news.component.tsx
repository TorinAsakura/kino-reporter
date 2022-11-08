import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'

import { Selections } from './selections'

const SelectionsAndNews: FC = () => {
  return (
    <Box width='100%' justifyContent='center'>
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
      <Column fill maxWidth={1280}>
        <Layout flexBasis={[0, 0, 48]} />
        <Selections />
        <Layout flexBasis={[20, 20, 32]} />
      </Column>
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
    </Box>
  )
}

export { SelectionsAndNews }
