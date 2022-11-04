import { Variant } from './color.interface'

const getColor = (variant: Variant, hover: boolean, pressed: boolean) => {
  if (variant === 'closeSearch') {
    if (!hover && !pressed) return 'tertiary'
    if (hover && !pressed) return 'secondary'
    if (hover && pressed) return 'primary'
  }

  return 'primary'
}

export { getColor }
