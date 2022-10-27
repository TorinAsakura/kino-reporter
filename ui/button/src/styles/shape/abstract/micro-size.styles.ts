import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getMicroSizeStyles = (theme): styleFn => {
  const microSizeStyles = createShapeStyles({
    size: 16,
    fontSize: 14,
    paddingLeft: 3,
    paddingRight: 3,
    rounding: 50,
    fontWeight: 500,
    fontFamily: theme.fonts.primary,
  })

  return microSizeStyles
}

export { getMicroSizeStyles }
