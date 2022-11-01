import styled                    from '@emotion/styled'
import { ConditionalRender }     from '@atls-ui-parts/conditional-render'

import React                     from 'react'
import { FC }                    from 'react'
import { useMemo }               from 'react'

import { SearchSecondaryIcon }   from '@ui/icons'

import { SearchAttachmentProps } from './search-attachment.interface'
import { baseStyles }            from './search-attachment.styles'
import { positionStyles }        from './search-attachment.styles'

const SearchAttachment: FC<SearchAttachmentProps> = ({ value, type }) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  return type === 'search' ? (
    <Attachment>
      <SearchSecondaryIcon color={value.length ? 'accent' : 'tertiary'} width={24} height={24} />
    </Attachment>
  ) : null
}

export { SearchAttachment }
