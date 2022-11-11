import styled  from '@emotion/styled'

import { Box } from '@ui/layout'

const BoxGradient = styled(Box)(({ theme, blur, gradient }: any) => ({
  background: theme.colors.gradient[gradient],
  backdropFilter: blur ? `blur(${blur}px)` : 'none',
  transition: '0.35s',
}))

export { BoxGradient }
