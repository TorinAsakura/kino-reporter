import styled                        from '@emotion/styled'
import { ConditionalRender }         from '@atls-ui-parts/conditional-render'

import { boxAppearanceStyles }       from './styles'
import { boxBaseStyles }             from './styles'
import { boxShapeStyles }            from './styles'
import { checkmarkAppearanceStyles } from './styles'
import { checkmarkBaseStyles }       from './styles'
import { checkmarkCheckStyles }      from './styles'
import { checkmarkShapeStyles }      from './styles'
import { containerBaseStyles }       from './styles'
import { containerFillStyles }       from './styles'
import { containerPositionStyles }   from './styles'
import { labelAppearanceStyles }     from './styles'
import { labelPositionStyles }       from './styles'
import { labelShapeStyles }          from './styles'

export const Box = styled.div<{ checked?: boolean; hover?: boolean }>(
  boxBaseStyles,
  boxAppearanceStyles,
  boxShapeStyles
)
export const Container = styled.div<{ labelPosition?: string; fill?: boolean }>(
  containerBaseStyles,
  containerPositionStyles,
  containerFillStyles
)
export const Label = styled(ConditionalRender())(
  labelShapeStyles,
  labelAppearanceStyles,
  labelPositionStyles
)
export const SelectCheckmark = styled.div<{ checked: boolean; hover?: boolean }>(
  checkmarkBaseStyles,
  checkmarkAppearanceStyles,
  checkmarkShapeStyles,
  checkmarkCheckStyles
)
