import styled            from '@emotion/styled'

import { createElement } from 'react'
import { color }         from 'styled-system'

interface RubleProps {
  count?: number
}

const Span = styled('span')(
  () => ({
    display: 'inline-flex',
  }),
  color
)

const Ruble = ({ count = 1 }: RubleProps) => createElement(Span, {}, '₽'.repeat(count))

export { Ruble }
