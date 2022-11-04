import { createContext } from 'react'

export interface ContextStates {
  hover: boolean
  pressed: boolean
}

const Context = createContext<ContextStates>({ hover: false, pressed: false })

const { Provider, Consumer } = Context

export const StatesProvider = Provider
export const StatesConsumer = Consumer
