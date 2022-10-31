import { styleFn } from 'styled-system'

export const transitionStyles: styleFn = () => ({
  transition: '.3s',
})

export const appearanceNavLinkStyles: styleFn = ({ theme, keep }) =>
  !keep && {
    color: theme.colors.links.secondary.default.font,
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover': {
      color: theme.colors.links.secondary.hover.font,
      backgroundColor: theme.colors.links.secondary.hover.background,
      borderRadius: theme.radii.intermediate,
    },
  }

export const activeNavLinkStyles: styleFn = ({ active, theme }) =>
  active && {
    color: theme.colors.links.secondary.active.font,
    '&:hover': {
      color: theme.colors.links.secondary.active.font,
      backgroundColor: theme.colors.links.secondary.active.background,
      borderRadius: theme.radii.intermediate,
    },
    '& svg > path:only-of-type': {
      fill: theme.colors.links.secondary.active.font,
    },
  }

export const defaultNavLinkStyles: styleFn = ({ active, theme }) =>
  !active && {
    color: theme.colors.links.secondary.default.font,
    '&:hover': {
      backgroundColor: theme.colors.links.secondary.hover.background,
      color: theme.colors.links.secondary.hover.font,
      borderRadius: theme.radii.intermediate,
    },
  }
