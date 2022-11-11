import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getTinySizeStyles = (theme): styleFn => {
  const tinySizeStyles = createShapeStyles({
    size: 20,
    fontSize: 14,
    paddingLeft: 6,
    paddingRight: 6,
    rounding: 50,
    fontWeight: 500,
    fontFamily: theme.fonts.primary,
  })

  return tinySizeStyles
}

export { getTinySizeStyles }
