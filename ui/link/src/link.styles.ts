import { styleFn } from 'styled-system'

export const transitionStyles: styleFn = () => ({
  transition: 0.3,
})

export const appearanceLinkStyles: styleFn = ({ theme, keep }) =>
  !keep && {
    color: theme.colors.links.secondary.default.font,
    '&:hover': {
      color: theme.colors.links.secondary.hover.font,
    },
    '&:active': {
      color: theme.colors.links.secondary.pressed.font,
    },
  }

export const shapeLinkStyles: styleFn = ({ theme }) => ({
  fontSize: theme.fontSizes.tiny,
  fontFamily: theme.fonts.primary,
  whiteSpace: 'nowrap',
})

export const activeLinkStyles: styleFn = ({ active, theme }) =>
  active && {
    color: theme.colors.links.secondary.default.font,
  }
