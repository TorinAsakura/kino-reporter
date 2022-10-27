import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getBigSizeStyles = (theme): styleFn => {
  const bigSizeStyles = createShapeStyles({
    size: 80,
    fontSize: theme.fontSizes.small,
    rounding: theme.radii.intermediate,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
  })

  return bigSizeStyles
}

export { getBigSizeStyles }
