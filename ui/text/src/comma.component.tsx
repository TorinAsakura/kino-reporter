import styled            from '@emotion/styled'

import { createElement } from 'react'
import { color }         from 'styled-system'

interface CommaProps {
  count?: number
}

const Span = styled('span')(
  () => ({
    display: 'inline-flex',
  }),
  color
)

const Comma = ({ count = 1 }: CommaProps) => createElement(Span, {}, ','.repeat(count))

export { Comma }
