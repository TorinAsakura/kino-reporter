import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputVariant = 'primary' | 'secondary' | 'ghost'

export type InputSize = 'normal' | 'giant' | 'semiNormal'

export interface InputProps extends BaseInputProps {
  variant?: InputVariant
  size?: InputSize
  label?: string
  textAlign?: string
  hint?: string
  maxLength?: number
  errorText?: string
  textarea?: boolean
  errorMessage?: string
  isMessageSent?: boolean
  setIsMessageSent?: (isMessageSent: boolean) => void
}
