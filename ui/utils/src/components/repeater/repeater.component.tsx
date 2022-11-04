import React             from 'react'
import { FC }            from 'react'

import { Condition }     from '@ui/condition'

import { RepeaterProps } from './repeater.interfaces'

const Repeater: FC<RepeaterProps> = ({ quantity, items, onIteration }) => (
  <>
    <Condition match={quantity === undefined}>{items?.map(onIteration)}</Condition>
    <Condition match={quantity !== undefined}>
      {[...new Array(quantity)]?.map(onIteration)}
    </Condition>
  </>
)

export { Repeater }
