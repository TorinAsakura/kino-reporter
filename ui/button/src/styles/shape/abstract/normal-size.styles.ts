import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getNormalSizeStyles = (theme): styleFn => {
  const normalSizeStyles = createShapeStyles({
    size: 48,
    fontSize: theme.fontSizes.small,
    rounding: theme.radii.intermediate,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
  })

  return normalSizeStyles
}

export { getNormalSizeStyles }
