import styled                        from '@emotion/styled'
import { ConditionalRender }         from '@atls-ui-parts/conditional-render'

import React                         from 'react'
import { FC }                        from 'react'
import { useMemo }                   from 'react'
import { forwardRef }                from 'react'

import { Button }                    from '@ui/button'
import { Condition }                 from '@ui/condition'
import { NewsletterIcon }            from '@ui/icons'
import { SuccessIcon }               from '@ui/icons'
import { Box }                       from '@ui/layout'

import { NewsletterAttachmentProps } from './newsletter-attachment.interface'
import { baseStyles }                from './newsletter-attachment.styles'
import { positionStyles }            from './newsletter-attachment.styles'

const NewsletterAttachment: FC<NewsletterAttachmentProps> = forwardRef((
  { value, type, setValue, error, isMessageSent, setIsMessageSent },
  ref
) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  if (isMessageSent) setTimeout(() => setIsMessageSent?.(false), 3000)

  return type === 'newsletter' ? (
    <Attachment>
      <Box width={40}>
        <Button
          style={{ padding: 0 }}
          size='small'
          variant='buy'
          disabled={error !== ''}
          onClick={() => {
            setIsMessageSent?.(true)
            setValue('Пора проверить почту!')
            setTimeout(() => {
              setValue('')
            }, 3000)
          }}
          // @ts-ignore
          ref={ref as any}
        >
          <Condition match={!isMessageSent!}>
            <NewsletterIcon color='white' width={24} height={24} />
          </Condition>
          <Condition match={isMessageSent!}>
            <SuccessIcon color='white' width={24} height={24} />
          </Condition>
        </Button>
      </Box>
    </Attachment>
  ) : null
})

export { NewsletterAttachment }
