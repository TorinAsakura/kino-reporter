import { styleFn } from 'styled-system'

const createTransitionStyles = (transition): styleFn =>
  () => ({
    transition: `${transition}s`,
  })

export { createTransitionStyles }
