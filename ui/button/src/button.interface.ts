import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

import { LayoutProps }                    from 'styled-system'
import { SpaceProps }                     from 'styled-system'

type ButtonColors =
  | 'primary'
  | 'inversePrimary'
  | 'secondary'
  | 'secondaryInverse'
  | 'tertiary'
  | 'up'
  | 'grebe'
  | 'grebeSecondary'
  | 'tortoise'
  | 'corner'
  | 'reply'
  | 'logout'
  | 'sorting'
  | 'play'
  | 'heron'
  | 'edit'
  | 'close'
  | 'closeSearch'
  | 'mapNav'
  | 'arrowFill'
  | 'arrowBlur'
  | 'socialNav'
  | 'social'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  color?: ButtonColors
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
}
