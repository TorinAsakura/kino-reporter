import { ReactNode } from 'react'

export interface DrawerProps {
  top: number
  children: ReactNode | ReactNode[]
  active: boolean
  onClose: () => any
}
