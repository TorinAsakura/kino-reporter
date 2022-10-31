import React                  from 'react'
import { FC }                 from 'react'

import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { NextNavLink }        from '@ui/link'

import { useNavigationLinks } from '../data'

const NavigationList: FC = () => {
  const { links } = useNavigationLinks()

  return (
    <Row alignItems='center'>
      {links.data.nav.map(({ title, path }, index) => (
        <React.Fragment key={title}>
          <NextNavLink path={path}>{title}</NextNavLink>
          <Layout flexBasis={links.data.nav.length - 1 === index ? 0 : 48} />
        </React.Fragment>
      ))}
    </Row>
  )
}

export { NavigationList }
