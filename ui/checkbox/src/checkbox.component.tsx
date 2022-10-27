import { HiddenInput }     from '@atls-ui-parts/hidden-input'

import React               from 'react'
import { forwardRef }      from 'react'

import { CheckboxIcon }    from '@ui/icons'
import { useHover }        from '@ui/utils'

import { CheckboxProps }   from './checkbox.interface'
import { Container }       from './checkbox.styles'
import { Box }             from './checkbox.styles'
import { SelectCheckmark } from './checkbox.styles'
import { Label }           from './checkbox.styles'

const doNothing = (...args) => {
  // do nothing
}

const CheckboxWithoutRef = (
  { children, active, onCheck = (newState) => doNothing(), ...props }: CheckboxProps,
  ref
) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container onClick={() => onCheck(!active)} {...props} {...hoverProps} ref={ref}>
      <HiddenInput
        type='checkbox'
        checked={active}
        onChange={(event) => onCheck(event.currentTarget.checked)}
      />
      <Box checked={active!} hover={hover!}>
        <SelectCheckmark checked={active!}>
          <CheckboxIcon color='white' width={14} height={14} />
        </SelectCheckmark>
      </Box>
      <Label>{children}</Label>
    </Container>
  )
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(CheckboxWithoutRef)

export { Checkbox }
