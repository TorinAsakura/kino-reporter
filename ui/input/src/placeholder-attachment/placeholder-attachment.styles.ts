import { styleFn } from 'styled-system'

export const placeholderStyles = (): styleFn =>
  ({ theme }) => ({
    'input::placeholder': {
      color: theme.colors.text.lightPrimary,
    },
  })
