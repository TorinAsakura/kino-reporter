import { styleFn }    from 'styled-system'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

const appearanceLinkStyles: styleFn = ({ theme }) => ({
  logo: {
    color: theme.colors.links.logo.color,
    '&:hover': {
      color: theme.colors.links.logo.color,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.logo.color,
      },
    },
    '&:active': {
      color: theme.colors.links.logo.color,
    },
  },
  primary: {
    color: theme.colors.links.primary.default.font,
    '&:hover': {
      color: theme.colors.links.primary.hover.font,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.primary.hover.font,
      },
    },
    '&:active': {
      color: theme.colors.links.primary.pressed.font,
    },
  },
  secondary: {
    color: theme.colors.links.secondary.default.font,
    '&:hover': {
      color: theme.colors.links.secondary.hover.font,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.secondary.hover.font,
      },
    },
    '&:active': {
      color: theme.colors.links.secondary.pressed.font,
    },
  },
  tertiary: {
    color: theme.colors.links.tertiary.default.font,
    '&:hover': {
      color: theme.colors.links.tertiary.hover.font,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.tertiary.hover.font,
      },
    },
    '&:active': {
      color: theme.colors.links.tertiary.pressed.font,
    },
  },
  mallard: {
    color: theme.colors.links.mallard.default.font,
    '&:hover': {
      color: theme.colors.links.mallard.hover.font,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.mallard.hover.font,
      },
    },
    '&:active': {
      color: theme.colors.links.mallard.pressed.font,
    },
  },
  yam: {
    color: theme.colors.links.yam.default.font,
    '&:hover': {
      color: theme.colors.links.yam.hover.font,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.yam.hover.font,
      },
    },
    '&:active': {
      color: theme.colors.links.yam.pressed.font,
    },
  },
  newt: {
    color: theme.colors.links.newt.default.font,
    '&:hover': {
      color: theme.colors.links.newt.hover.font,
      '& svg > path:only-of-type': {
        fill: theme.colors.links.newt.hover.font,
      },
    },
    '&:active': {
      color: theme.colors.links.newt.pressed.font,
    },
  },
})

export const appearanceStyles = () => switchProp(prop('variant', 'primary'), appearanceLinkStyles)
