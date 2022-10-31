import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Drawer }         from '@ui/drawer'
import { LogoIcon }       from '@ui/icons'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'

import { DropdownMenu }   from './dropdown-menu'
import { HeaderProps }    from './header.interface'
import { MenuButton }     from './menu-button'
import { NavigationList } from './navigation-list'

const Header: FC<HeaderProps> = ({ transparent = false }) => {
  const [activeDrawer, setActiveDrawer] = useState<boolean>(false)

  return (
    <Box
      width='100%'
      zIndex={950}
      height={[64, 64, 88]}
      backgroundColor={transparent ? 'transparent' : 'white'}
      position='fixed'
    >
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
      <Column fill>
        <Layout flexBasis={[16, 16, 24]} />
        <Row justifyContent={['flex-start', 'flex-start', 'center']}>
          <Layout>
            <MenuButton
              transparent={transparent}
              activeDrawer={activeDrawer}
              setActiveDrawer={setActiveDrawer}
            />
            <Drawer active={activeDrawer} onClose={() => setActiveDrawer(false)}>
              <DropdownMenu />
            </Drawer>
          </Layout>
          <Layout flexBasis={[16, 16, 24]} flexShrink={0} />
          <Layout display={['none', 'none', 'flex']}>
            <LogoIcon width={102} height={40} />
          </Layout>
          <Layout display={['flex', 'flex', 'none']}>
            <LogoIcon width={82} height={32} />
          </Layout>
          <Layout flexBasis={[0, 0, 64]} flexShrink={0} />
          <Layout display={['none', 'none', 'flex']} maxWidth={526} width='100%'>
            <NavigationList />
          </Layout>
          <Layout flexBasis={[0, 0, 89.5]} />
          <Layout display={['none', 'none', 'flex']}>
            <Box backgroundColor='grey' width={360} height={48} />
          </Layout>
          <Layout flexBasis={24} flexShrink={0} flexGrow={[1, 1, 0]} />
          <Layout alignItems='center'>
            <Box backgroundColor='grey' borderRadius='max' width={40} height={40} />
          </Layout>
        </Row>
        <Layout flexBasis={[16, 16, 24]} />
      </Column>
      <Layout flexBasis={[16, 16, 90]} flexShrink={0} />
    </Box>
  )
}

export { Header }
