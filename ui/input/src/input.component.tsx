import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'
import { createTextareaProps }      from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'
import { useEffect }                from 'react'

import { Condition }                from '@ui/condition'
import { Row }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Text }                     from '@ui/text'
import { doNothing }                from '@shared/utils'
import { useHover }                 from '@ui/utils'

import { CrossAttachment }          from './cross-attachment'
import { InputProps }               from './input.interfaces'
import { NewsletterAttachment }     from './newsletter-attachment'
import { SearchAttachment }         from './search-attachment'
import { placeholderStyles }        from './placeholder-attachment'
import { baseStyles }               from './styles'
import { shapeStyles }              from './styles'
import { appearanceStyles }         from './styles'
import { labelAppearanceStyles }    from './styles'
import { labelShapeStyles }         from './styles'
import { textareaStyles }           from './styles'
import { cancelButtonStyles }       from './styles'

export const InputElement = styled.div(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  textareaStyles,
  cancelButtonStyles,
  placeholderStyles
)

export const Label = styled(Text)(labelAppearanceStyles, labelShapeStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    size,
    value,
    disabled,
    onChange,
    onChangeNative,
    label,
    textAlign,
    type,
    hint,
    maxLength,
    errorText = '',
    errorMessage,
    isMessageSent,
    setIsMessageSent,
    textarea,
    ...props
  },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)
  const [focus, setFocus] = useState<boolean>(false)
  const [hidden] = useState<boolean>(true)
  const [hover, hoverProps] = useHover()

  const crossRef = useRef(null)

  const { containerProps, rawInputProps } = createTextareaProps()

  if (!ref) {
    // eslint-disable-next-line
    ref = useRef(null)
  }

  useEffect(() => {
    const handler = (event) => {
      if (crossRef && crossRef.current && event.relatedTarget === crossRef.current) {
        // do nothing
      } else setFocus(false)
    }

    if (ref && (ref as any).current) {
      ;(ref as any).current.addEventListener('focusout', handler)

      return () => (ref as any)?.current?.removeEventListener('focusout', handler)
    }

    return doNothing
  }, [ref])

  return (
    <Row>
      <Column fill>
        <Condition match={!!label}>
          <Row>
            <Label disabled={disabled}>{label}</Label>
            <Condition match={!!maxLength}>
              <Layout flexGrow={1} />
              <Text fontSize='small' color='text.lightGray' fontWeight='semiBold'>
                {maxLength! - (value?.toString().length || 0)}
              </Text>
            </Condition>
          </Row>
          <Layout flexShrink={0} flexBasis={8} />
        </Condition>
        <InputElement
          {...props}
          {...(textarea && containerProps)}
          textarea={textarea}
          error={errorText !== ''}
          size={size}
          focus={focus}
          disabled={disabled}
          onClick={() => {
            ;(ref as any).current.focus()
          }}
          hover={hover}
          {...hoverProps}
        >
          <SearchAttachment value={value} type={type} />
          <RawInput
            ref={ref}
            {...props}
            {...(textarea && rawInputProps)}
            disabled={disabled}
            value={value}
            onChange={changeValue}
            type={!hidden ? 'text' : type}
            onFocus={() => setFocus(true)}
            style={{
              textAlign: textAlign as any,
              ...(textarea && {
                resize: 'none',
                width: '100%',
              }),
            }}
            maxLength={maxLength}
          />
          <CrossAttachment
            type={type}
            focus={focus}
            value={value}
            setValue={onChange || doNothing}
            ref={crossRef}
          />
          <NewsletterAttachment
            error={errorText}
            type={type}
            value={value}
            isMessageSent={isMessageSent}
            setIsMessageSent={setIsMessageSent}
            setValue={onChange || doNothing}
          />
        </InputElement>
        <Condition match={errorText !== ''}>
          <Layout flexShrink={0} flexBasis={8} />
          <Text fontSize='semiSmall' color='text.danger'>
            {errorText}
          </Text>
        </Condition>
      </Column>
    </Row>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
