import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getMediumSizeStyles = (theme): styleFn => {
  const mediumSizeStyles = createShapeStyles({
    size: 56,
    fontSize: theme.fontSizes.small,
    rounding: theme.radii.xxl,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
  })

  return mediumSizeStyles
}

export { getMediumSizeStyles }
