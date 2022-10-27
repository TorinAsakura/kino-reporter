import styled                      from '@emotion/styled'
import { createNextNavLink }       from '@atls-ui-parts/link'
import { createBaseStyles }        from '@atls-ui-parts/link'

import { FC }                      from 'react'

import { Link }                    from './link.component'
import { LinkProps }               from './link.interfaces'
import { BaseLinkProps }           from './link.interfaces'
import { shapeLinkStyles }         from './link.styles'
import { activeNavLinkStyles }     from './next-nav-link.styles'
import { appearanceNavLinkStyles } from './next-nav-link.styles'
import { defaultNavLinkStyles }    from './next-nav-link.styles'

const NextNavLinkStyles = styled(Link)<BaseLinkProps>(
  createBaseStyles(),
  shapeLinkStyles,
  appearanceNavLinkStyles,
  activeNavLinkStyles,
  defaultNavLinkStyles
)

// @ts-ignore
const NextNavLink: FC<LinkProps> = createNextNavLink(NextNavLinkStyles)

export { NextNavLink }
