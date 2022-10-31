import React               from 'react'
import { FC }              from 'react'

import { GhostButton }     from '@ui/button'
import { Condition }       from '@ui/condition'
import { CloseIcon }       from '@ui/icons'
import { MenuIcon }        from '@ui/icons'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'

import { MenuButtonProps } from './menu-button.interface'

const MenuButton: FC<MenuButtonProps> = ({ transparent, activeDrawer, setActiveDrawer }) => (
  <>
    <Layout display={['none', 'none', 'flex']}>
      <Condition smooth smoothOptions={{ duration: 0.2, pattern: 'in' }} match={!activeDrawer}>
        <GhostButton onClick={() => setActiveDrawer(!activeDrawer)}>
          <Box
            backgroundColor={transparent ? 'lightWhite' : 'lightGray'}
            borderRadius='intermediate'
            p='8px'
          >
            <MenuIcon color='' width={24} height={24} />
          </Box>
        </GhostButton>
      </Condition>
      <Condition smooth smoothOptions={{ duration: 0.2, pattern: 'in' }} match={activeDrawer}>
        <GhostButton onClick={() => setActiveDrawer(!activeDrawer)}>
          <Box
            backgroundColor={transparent ? 'accent' : 'lightRed'}
            borderRadius='intermediate'
            p='8px'
          >
            <CloseIcon color={transparent ? 'white' : 'accent'} width={24} height={24} />
          </Box>
        </GhostButton>
      </Condition>
    </Layout>
    <Layout display={['flex', 'flex', 'none']}>
      <Condition smooth smoothOptions={{ duration: 0.2, pattern: 'in' }} match={!activeDrawer}>
        <GhostButton onClick={() => setActiveDrawer(!activeDrawer)}>
          <Box
            backgroundColor={transparent ? 'lightWhite' : 'lightGray'}
            borderRadius='intermediate'
            p='4px'
          >
            <MenuIcon width={24} height={24} />
          </Box>
        </GhostButton>
      </Condition>
      <Condition smooth smoothOptions={{ duration: 0.2, pattern: 'in' }} match={activeDrawer}>
        <GhostButton onClick={() => setActiveDrawer(!activeDrawer)}>
          <Box
            backgroundColor={transparent ? 'lightWhite' : 'lightGray'}
            borderRadius='intermediate'
            p='4px'
          >
            <CloseIcon color={transparent ? 'white' : 'accent'} width={24} height={24} />
          </Box>
        </GhostButton>
      </Condition>
    </Layout>
  </>
)

export { MenuButton }
