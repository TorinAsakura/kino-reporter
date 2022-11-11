import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getFullRoundedSizeStyles = (theme): styleFn => {
  const fullRoundedSizeStyles = createShapeStyles({
    size: 48,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: theme.fontSizes.small,
    rounding: theme.radii.max,
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.primary,
  })

  return fullRoundedSizeStyles
}

export { getFullRoundedSizeStyles }
