import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getSmallSizeStyles = (theme): styleFn => {
  const smallSizeStyles = createShapeStyles({
    size: 40,
    fontSize: theme.fontSizes.small,
    rounding: theme.radii.intermediate,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
    paddingRight: 16,
    paddingLeft: 16,
  })

  return smallSizeStyles
}

export { getSmallSizeStyles }
