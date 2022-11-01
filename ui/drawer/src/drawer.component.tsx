import React           from 'react'
import { FC }          from 'react'
import { motion }      from 'framer-motion'

import { Layout }      from '@ui/layout'

import { Backdrop }    from './backdrop'
import { DrawerProps } from './drawer.interface'
import { Renderer }    from './renderer'

const Drawer: FC<DrawerProps> = ({ children, top, mobileTop, active, onClose }) => (
  <Renderer active={active}>
    <Layout display={['none', 'none', 'flex']}>
      <motion.div
        style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 800 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Backdrop onClick={onClose} />
      </motion.div>
      <motion.div
        style={{ position: 'fixed', left: 0, top: 0, width: '100%', zIndex: 900 }}
        initial={{ top: '-100%' }}
        animate={{ top: top }}
        exit={{ top: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Layout>
    <Layout display={['flex', 'flex', 'none']}>
      <motion.div
        style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 900 }}
        initial={{ top: '-100%' }}
        animate={{ top: mobileTop }}
        exit={{ top: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Layout>
  </Renderer>
)

export { Drawer }
