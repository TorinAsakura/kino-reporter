import React               from 'react'
import { FC }              from 'react'
import { motion }          from 'framer-motion'

import { GhostButton }     from '@ui/button'
import { Condition }       from '@ui/condition'
import { Box }             from '@ui/layout'

import { MenuButtonProps } from './menu-button.interface'

const Path = (props) => (
  <motion.path fill='transparent' strokeWidth='2' strokeLinecap='round' {...props} />
)

const MenuButton: FC<MenuButtonProps> = ({ transparent, activeDrawer, setActiveDrawer }) => (
  <>
    <Condition match={!transparent}>
      <GhostButton onClick={() => setActiveDrawer(!activeDrawer)}>
        <Box
          backgroundColor={activeDrawer ? 'lightRed' : 'lightGray'}
          borderRadius='intermediate'
          p={['4px', '4px', '8px']}
        >
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <Path
              variants={{
                closed: { d: 'M 22 4.5 L 3 4.5', stroke: 'black' },
                open: { d: 'M 21.346 21.346 L 3 3.5', stroke: 'red' },
              }}
            />
            <Path
              d='M 2.5 11.423 L 22 11.423'
              variants={{
                closed: { opacity: 1, stroke: 'black' },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 22 18.346 L 2.5 18.346', stroke: 'black' },
                open: { d: 'M 21.346 3.5 L 3 21.346', stroke: 'red' },
              }}
            />
          </svg>
        </Box>
      </GhostButton>
    </Condition>
    <Condition match={transparent}>
      <GhostButton onClick={() => setActiveDrawer(!activeDrawer)}>
        <Box
          backgroundColor={activeDrawer ? 'accent' : 'lightWhite'}
          borderRadius='intermediate'
          p={['4px', '4px', '8px']}
        >
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <Path
              variants={{
                closed: { d: 'M 2 4.5 L 24 4.5', stroke: 'black' },
                open: { d: 'M 3 3.5 L 21.346 21.346', stroke: 'white' },
              }}
            />
            <Path
              d='M 2 11.423 L 24 11.423'
              variants={{
                closed: { opacity: 1, stroke: 'black' },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 18.346 L 24 18.346', stroke: 'black' },
                open: { d: 'M 3 21.346 L 21.346 3.5', stroke: 'white' },
              }}
            />
          </svg>
        </Box>
      </GhostButton>
    </Condition>
  </>
)

export { MenuButton }
