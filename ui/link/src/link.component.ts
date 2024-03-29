import styled               from '@emotion/styled'
import { createBaseStyles } from '@atls-ui-parts/link'

import { Text }             from '@ui/text'

import { BaseLinkProps }    from './link.interfaces'
import { shapeLinkStyles }  from './link.styles'
import { activeLinkStyles } from './link.styles'
import { transitionStyles } from './link.styles'
import { appearanceStyles } from './styles'

const Link = styled(Text.withComponent('a'))<BaseLinkProps>(
  createBaseStyles(),
  appearanceStyles(),
  shapeLinkStyles,
  activeLinkStyles,
  transitionStyles
)

export { Link }
