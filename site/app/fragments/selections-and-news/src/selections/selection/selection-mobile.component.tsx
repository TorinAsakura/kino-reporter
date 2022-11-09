import React              from 'react'
import { FC }             from 'react'

import { ImageCard }      from '@ui/image-card'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { NextLink }       from '@ui/link'
import { Text }           from '@ui/text'
import { TextEllipsis }   from '@ui/text'
import { formattedDate }  from '@shared/utils'

import { SelectionProps } from './selection.interface'

const SelectionMobile: FC<SelectionProps> = ({ title, date, description, imageUrl, altText }) => (
  <Row width={200}>
    <NextLink variant='secondary' path='/'>
      <Column fill>
        <Row>
          <ImageCard
            minWidth={200}
            maxWidth={200}
            height={124}
            imageUrl={imageUrl}
            altText={altText}
            indent={8}
            title={title}
          />
        </Row>
        <Layout flexBasis={12} flexShrink={0} />
        <Column fill flexDirection='column-reverse'>
          <Row maxWidth={192} height={77} overflow='hidden'>
            <Layout>
              <TextEllipsis
                lineClamp={4}
                fontFamily='lora'
                whiteSpace='normal'
                fontSize='semiRegular'
                lineHeight='extra'
              >
                {description}
              </TextEllipsis>
            </Layout>
          </Row>
          <Layout flexBasis={8} />
          <Row>
            <Text fontSize='atomic' lineHeight='compact' color='text.secondary'>
              {formattedDate('fullDate', date)}
            </Text>
          </Row>
        </Column>
      </Column>
    </NextLink>
  </Row>
)

export { SelectionMobile }
