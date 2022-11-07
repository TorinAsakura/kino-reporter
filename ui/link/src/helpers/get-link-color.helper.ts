import { Variant } from './color.interface'

const getLinkColor = (variant: Variant, hover: boolean) => {
  if (variant === 'primary') {
    if (!hover) return 'primary'
    if (hover) return 'accent'
  }

  return 'primary'
}

export { getLinkColor }
