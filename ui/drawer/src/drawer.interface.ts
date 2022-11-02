import { ReactNode } from 'react'

export interface DrawerProps {
  top: number
  mobileTop: number
  children: ReactNode | ReactNode[]
  active: boolean
  onClose: () => any
}
