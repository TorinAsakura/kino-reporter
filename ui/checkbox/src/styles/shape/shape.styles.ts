import { createBoxShapeStyles }   from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles } from '@atls-ui-parts/checkbox'
import { createLabelShapeStyles } from '@atls-ui-parts/checkbox'

import { theme }                  from '@ui/theme'

export const checkmarkShapeStyles = createCheckShapeStyles({
  size: 14,
})

export const boxShapeStyles = createBoxShapeStyles({
  size: 20,
  borderWidth: 1,
  borderRadius: theme.radii.extra,
})

export const labelShapeStyles = createLabelShapeStyles({
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.small,
})
