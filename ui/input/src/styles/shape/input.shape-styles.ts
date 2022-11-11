import { createShapeStyles } from '@atls-ui-parts/input'

import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 48,
  fontSize: prop('theme.fontSizes.semiRegular'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: 12,
  paddingRight: 12,
})

const shapeSemiNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 48,
  fontSize: prop('theme.fontSizes.semiRegular'),
  rounding: prop('theme.radii.intermediate') as unknown as number,
  paddingLeft: 12,
  paddingRight: 4,
})

const shapeGiantSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.bold'),
  size: 80,
  fontSize: prop('theme.fontSizes.colossal'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: 0,
  paddingRight: 0,
})

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeStyles,
  giant: shapeGiantSizeStyles,
  semiNormal: shapeSemiNormalSizeStyles,
})
