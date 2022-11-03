import { ReactNode } from 'react'

export interface DrawerProps {
  top: number | string
  mobileTop: number | string
  children: ReactNode | ReactNode[]
  active: boolean
  onClose: () => any
}
