import React             from 'react'
import { FC }            from 'react'
import { useState }      from 'react'

import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'

import { Cinema }        from './cinema'
import { Tabs as ETabs } from './films-and-serials.interface'
import { MotionBox }     from './styles'
import { Tabs }          from './tabs'

const variants = {
  open: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const FilmsAndSerials: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>(ETabs.FILMS)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <MotionBox
      display='flex'
      width='100%'
      justifyContent='center'
      backgroundColor='background.lightGray'
      initial={false}
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
    >
      <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
      <Column fill maxWidth={1280}>
        <Layout flexBasis={[32, 32, 64]} />
        <Tabs setIsOpen={setIsOpen} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Layout flexBasis={[20, 20, 32]} />
        <Cinema selectedTab={selectedTab} />
      </Column>
      <Layout flexBasis={[0, 0, 80]} />
    </MotionBox>
  )
}

export { FilmsAndSerials }
