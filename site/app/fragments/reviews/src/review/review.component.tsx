import React             from 'react'
import { FC }            from 'react'

import { Condition }     from '@ui/condition'
import { Divider }       from '@ui/divider'
import { ImageBlock }    from '@ui/image'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { NextLink }      from '@ui/link'
import { Text }          from '@ui/text'
import { TextEllipsis }  from '@ui/text'
import { formattedDate } from '@shared/utils'

import { ReviewProps }   from './review.interface'

const Review: FC<ReviewProps> = ({ title, date, author, imageUrl, altText, index, lastItem }) => (
  <>
    <Column width='100%' maxWidth={['100%', '100%', 624]}>
      <NextLink variant='secondary' path='/'>
        <Column>
          <Row>
            <Box
              minWidth={[120, 120, 260]}
              maxWidth={[120, 120, 260]}
              height={[100, 100, 180]}
              backgroundColor='gray'
              borderRadius='default'
              overflow='hidden'
            >
              <ImageBlock src={imageUrl} alt={altText} />
            </Box>
            <Layout flexBasis={[16, 16, 24]} flexShrink={0} />
            <Column height='auto'>
              <Layout flexBasis={4} />
              <Row maxWidth={332} display={['none', 'none', 'flex']} overflow='hidden'>
                <TextEllipsis
                  lineClamp={3}
                  whiteSpace='normal'
                  fontFamily='lora'
                  fontSize={['semiRegular', 'semiRegular', 'semiLarge']}
                  lineHeight='extra'
                >
                  {title}
                </TextEllipsis>
              </Row>
              <Row maxWidth='100%' display={['flex', 'flex', 'none']} overflow='hidden'>
                <TextEllipsis
                  lineClamp={2}
                  whiteSpace='normal'
                  fontFamily='lora'
                  fontSize={['semiRegular', 'semiRegular', 'semiLarge']}
                  lineHeight='extra'
                >
                  {title}
                </TextEllipsis>
              </Row>
              <Layout flexGrow={1} />
              <Row>
                <Text
                  color='text.primary'
                  fontSize={['semiSmall', 'semiSmall', 'default']}
                  lineHeight='compact'
                >
                  {author}
                </Text>
              </Row>
              <Layout flexBasis={[6, 6, 8]} />
              <Row>
                <Text
                  color='text.secondary'
                  lineHeight='compact'
                  fontSize={['atomic', 'atomic', 'small']}
                >
                  {formattedDate('fullDate', date)}
                </Text>
              </Row>
            </Column>
          </Row>
        </Column>
      </NextLink>
      <Layout flexBasis={[20, 20, 32]} />
      <Condition match={lastItem !== index}>
        <Row display={['flex', 'flex', 'none']}>
          <Divider backgroundColor='gray' />
        </Row>
        <Layout flexBasis={[20, 20, 0]} />
      </Condition>
    </Column>
    <Condition match={index % 2 === 0}>
      <Layout flexBasis={[0, 0, 32]} />
    </Condition>
  </>
)

export { Review }
