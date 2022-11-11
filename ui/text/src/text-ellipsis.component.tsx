import styled   from '@emotion/styled'

import { Text } from './index'

const TextEllipsis = styled(Text)(({ theme, lineClamp, textShadow }) => ({
  display: '-webkit-box',
  '-webkit-line-clamp': `${lineClamp}`,
  '-webkit-box-orient': 'vertical',
  textShadow: `${theme.shadows[textShadow]}`,
}))

export { TextEllipsis }
