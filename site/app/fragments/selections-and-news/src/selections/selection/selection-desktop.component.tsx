import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { ImageCard }      from '@ui/image-card'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { NextLink }       from '@ui/link'
import { Text }           from '@ui/text'
import { TextEllipsis }   from '@ui/text'
import { formattedDate }  from '@shared/utils'

import { MainPreview }    from '../main-preview'
import { SelectionProps } from './selection.interface'

const SelectionDesktop: FC<SelectionProps> = ({
  index,
  title,
  date,
  description,
  imageUrl,
  altText,
}) => (
  <>
    <Row width={index === 0 ? '100%' : 260}>
      <Condition match={index === 0}>
        <Column fill>
          <MainPreview
            imageUrl={imageUrl}
            altText={altText}
            title={title}
            description={description}
            date={date}
          />
          <Layout flexBasis={32} />
        </Column>
      </Condition>
      <Condition match={index !== 0}>
        <NextLink variant='secondary' path='/'>
          <Column fill>
            <Row>
              <ImageCard
                minWidth={260}
                maxWidth={260}
                height={180}
                imageUrl={imageUrl}
                altText={altText}
                indent={12}
                title={title}
              />
            </Row>
            <Layout flexBasis={16} flexShrink={0} />
            <Column fill>
              <Row maxWidth={252} height={72} overflow='hidden'>
                <Layout display='flex'>
                  <TextEllipsis
                    lineClamp={3}
                    fontFamily='lora'
                    whiteSpace='normal'
                    fontSize='regular'
                    lineHeight='small'
                  >
                    {description}
                  </TextEllipsis>
                </Layout>
              </Row>
              <Layout flexBasis={12} />
              <Row>
                <Text fontSize='small' lineHeight='compact' color='text.secondary'>
                  {formattedDate('fullDate', date)}
                </Text>
              </Row>
            </Column>
            <Condition match={index !== 0}>
              <Layout flexBasis={32} flexShrink={0} />
            </Condition>
          </Column>
        </NextLink>
      </Condition>
    </Row>
    <Condition match={index !== 0}>
      <Layout flexBasis={32} />
    </Condition>
  </>
)

export { SelectionDesktop }
