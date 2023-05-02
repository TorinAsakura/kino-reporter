import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getSemiSmallSizeStyles = (theme): styleFn => {
  const semiSmallSizeStyles = createShapeStyles({
    size: 38,
    fontSize: theme.fontSizes.default,
    rounding: theme.radii.max,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
    paddingRight: 16,
    paddingLeft: 16,
  })

  return semiSmallSizeStyles
}

export { getSemiSmallSizeStyles }
