export interface CheckboxProps {
  active?: boolean
  onClick?: () => boolean
  checked?: boolean
  onCheck?: (newState: boolean) => any
  fill?: boolean
  children?: any
}
