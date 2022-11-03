import styled                   from '@emotion/styled'
import { ConditionalRender }    from '@atls-ui-parts/conditional-render'

import React                    from 'react'
import { FC }                   from 'react'
import { useMemo }              from 'react'
import { forwardRef }           from 'react'

import { GhostButton }          from '@ui/button'
import { Condition }            from '@ui/condition'
import { Box }                  from '@ui/layout'
import { Text }                 from '@ui/text'

import { CrossAttachmentProps } from './cross-attachment.interface'
import { baseStyles }           from './cross-attachment.styles'
import { positionStyles }       from './cross-attachment.styles'

const CrossAttachment: FC<CrossAttachmentProps> = forwardRef((
  { value, type, focus, setValue },
  ref
) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  return type === 'search' && value.length ? (
    <Attachment>
      <Condition match={value.length}>
        <Box width={67}>
          <GhostButton
            onClick={() => setValue('')}
            // @ts-ignore
            ref={ref as any}
          >
            <Text color='text.secondary' fontSize='small' fontWeight='medium'>
              Очистить
            </Text>
          </GhostButton>
        </Box>
      </Condition>
    </Attachment>
  ) : null
})

export { CrossAttachment }
