import { ReactNode } from 'react'

export interface DrawerProps {
  children: ReactNode | ReactNode[]
  active: boolean
  onClose: () => any
}
