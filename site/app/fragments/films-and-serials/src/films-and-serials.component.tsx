import React             from 'react'
import { FC }            from 'react'
import { useState }      from 'react'

import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'

import { Cinema }        from './cinema'
import { Tabs as ETabs } from './films-and-serials.interface'
import { Tabs }          from './tabs'

const FilmsAndSerials: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>(ETabs.FILMS)

  return (
    <Box width='100%' justifyContent='center' backgroundColor='background.lightGray'>
      <Layout flexBasis={80} />
      <Column fill maxWidth={1280}>
        <Layout flexBasis={64} />
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Layout flexBasis={32} />
        <Cinema selectedTab={selectedTab} />
        <Layout flexBasis={64} />
      </Column>
      <Layout flexBasis={80} />
    </Box>
  )
}

export { FilmsAndSerials }
