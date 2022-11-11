import { createBaseStyles } from '@atls-ui-parts/input'

import { styleFn }          from 'styled-system'
import { prop }             from 'styled-tools'
import { ifProp }           from 'styled-tools'

export const baseStyles = createBaseStyles()

export const labelAppearanceStyles: styleFn = ifProp(
  prop('disabled', false),
  ({ theme }) => ({ color: theme.colors.input.primary.disabled.font }),
  ({ theme }) => ({ color: theme.colors.text.accent })
)

export const labelShapeStyles: styleFn = ({ theme }) => ({
  fontWeight: theme.fontWeights.semiBold,
  fontSize: theme.fontSizes.semiRegular,
})

export const textareaStyles: styleFn = ifProp(prop('textarea', false), {
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 12,
  paddingBottom: 12,
})

export const cancelButtonStyles = (): styleFn => () => ({
  'input[type="search"]::-webkit-search-cancel-button': {
    '-webkit-appearance': 'none',
  },
})
