import { createBoxAppearanceStyles }     from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createContainerPositionStyles } from '@atls-ui-parts/checkbox'
import { createLabelAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createLabelPositionStyles }     from '@atls-ui-parts/checkbox'

import { styleFn }                       from 'styled-system'
import { ifProp }                        from 'styled-tools'
import { prop }                          from 'styled-tools'

import { theme }                         from '@ui/theme'

export const labelAppearanceStyles = createLabelAppearanceStyles({
  fontColor: theme.colors.text.primary,
})

export const labelPositionStyles = createLabelPositionStyles({
  margin: '8px',
})

export const containerPositionStyles = createContainerPositionStyles()

export const containerFillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

export const checkmarkAppearanceStyles = createCheckAppearanceStyles({
  color: theme.colors.accent,
})

export const checkmarkCheckStyles = ifProp(
  'checked',
  {
    display: 'flex',
  },
  { display: 'none' }
)

export const boxDefaultAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.primary.border,
  backgroundColor: 'transparent',
})

export const boxHoverAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.primary.border,
  backgroundColor: theme.colors.checkbox.primary.hover,
})

export const boxCheckedAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.primary.active,
  backgroundColor: theme.colors.checkbox.primary.active,
})

export const boxCheckedHoverAppearanceStyles = createBoxAppearanceStyles({
  borderColor: 'transparent',
  backgroundColor: theme.colors.checkbox.primary.active,
})

export const boxDisabledAppearanceStyles = createBoxAppearanceStyles({
  borderColor: 'transparent',
  backgroundColor: theme.colors.checkbox.primary.disabled,
})

export const boxAppearanceStyles = ifProp(
  prop('disabled', false),
  boxDisabledAppearanceStyles,
  ifProp(
    prop('checked', false),
    ifProp(prop('hover', false), boxCheckedHoverAppearanceStyles, boxCheckedAppearanceStyles),
    ifProp(prop('hover', false), boxHoverAppearanceStyles, boxDefaultAppearanceStyles)
  )
)
