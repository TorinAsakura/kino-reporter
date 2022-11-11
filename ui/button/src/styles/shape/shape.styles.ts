import { styleFn }                    from 'styled-system'
import { switchProp }                 from 'styled-tools'
import { prop }                       from 'styled-tools'

import { getBigSizeStyles }           from './abstract'
import { getFullRoundedSizeStyles }   from './abstract'
import { getNormalRoundedSizeStyles } from './abstract'
import { getGhostStyles }             from './abstract'
import { getMicroSizeStyles }         from './abstract'
import { getTinySizeStyles }          from './abstract'
import { getSmallSizeStyles }         from './abstract'
import { getNormalSizeStyles }        from './abstract'

const getShapeStyles = (theme): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const smallSizeStyles = getSmallSizeStyles(theme)
  const tinySizeStyles = getTinySizeStyles(theme)
  const microSizeStyles = getMicroSizeStyles(theme)
  const bigSizeStyles = getBigSizeStyles(theme)
  const normalRoundedSizeStyles = getNormalRoundedSizeStyles(theme)
  const fullRoundedSizeStyles = getFullRoundedSizeStyles(theme)
  const ghostSizeStyles = getGhostStyles()

  return switchProp(prop('size', 'normal'), {
    big: bigSizeStyles,
    normal: normalSizeStyles,
    small: smallSizeStyles,
    tiny: tinySizeStyles,
    micro: microSizeStyles,
    ghost: ghostSizeStyles,
    normalRounded: normalRoundedSizeStyles,
    fullRounded: fullRoundedSizeStyles,
  })
}

export { getShapeStyles }
