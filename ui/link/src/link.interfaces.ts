export type LinkColor = 'primary' | 'secondary' | 'logo' | 'tertiary' | 'mallard' | 'yam' | 'newt'

export interface BaseLinkProps {
  active?: boolean
}

export interface LinkProps {
  children?: any
  keep?: boolean
  href?: string
  path: string
  variant?: LinkColor
}
