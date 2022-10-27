import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getBigSizeStyles }    from './abstract'
import { getMicroSizeStyles }  from './abstract'
import { getTinySizeStyles }   from './abstract'
import { getSmallSizeStyles }  from './abstract'
import { getNormalSizeStyles } from './abstract'

const getShapeStyles = (theme): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const smallSizeStyles = getSmallSizeStyles(theme)
  const tinySizeStyles = getTinySizeStyles(theme)
  const microSizeStyles = getMicroSizeStyles(theme)
  const bigSizeStyles = getBigSizeStyles(theme)

  return switchProp(prop('size', 'normal'), {
    big: bigSizeStyles,
    normal: normalSizeStyles,
    small: smallSizeStyles,
    tiny: tinySizeStyles,
    micro: microSizeStyles,
  })
}

export { getShapeStyles }
