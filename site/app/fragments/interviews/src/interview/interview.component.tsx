import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { Divider }        from '@ui/divider'
import { ImageBlock }     from '@ui/image'
import { ImageCard }      from '@ui/image-card'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { NextLink }       from '@ui/link'
import { Text }           from '@ui/text'
import { TextEllipsis }   from '@ui/text'
import { formattedDate }  from '@shared/utils'

import { InterviewProps } from './interview.interface'

const Interview: FC<InterviewProps> = ({
  title,
  date,
  description,
  imageUrl,
  altText,
  index,
  lastItem,
}) => (
  <>
    <Column width='100%' maxWidth={['100%', '100%', 624]}>
      <NextLink variant='secondary' path='/'>
        <Row>
          <Layout display={['none', 'none', 'flex']}>
            <ImageCard
              minWidth={260}
              maxWidth={260}
              height={180}
              imageUrl={imageUrl}
              altText={altText}
              indent={12}
              title={title}
            />
          </Layout>
          <Box
            borderRadius='intermediate'
            overflow='hidden'
            maxWidth={120}
            minWidth={120}
            height={100}
            display={['flex', 'flex', 'none']}
          >
            <ImageBlock src={imageUrl} alt={altText} />
          </Box>
          <Layout flexBasis={[16, 16, 24]} flexShrink={0} />
          <Column height='auto'>
            <Layout flexBasis={4} />
            <Row maxWidth={332} display={['none', 'none', 'flex']} overflow='hidden'>
              <TextEllipsis
                lineClamp={4}
                whiteSpace='normal'
                fontFamily='lora'
                fontSize={['semiRegular', 'semiRegular', 'semiLarge']}
                lineHeight='extra'
              >
                {description}
              </TextEllipsis>
            </Row>
            <Row maxWidth='100%' display={['flex', 'flex', 'none']}>
              <Text
                textTransform='uppercase'
                fontSize='atomic'
                color='text.accent'
                fontWeight='semiBold'
              >
                {title}
              </Text>
            </Row>
            <Layout flexBasis={[8, 8, 0]} />
            <Row maxWidth='100%' display={['flex', 'flex', 'none']} overflow='hidden'>
              <TextEllipsis
                lineClamp={3}
                whiteSpace='normal'
                fontFamily={['Inter', 'Inter', 'lora']}
                fontSize={['default', 'default', 'semiLarge']}
                lineHeight='extra'
              >
                {description}
              </TextEllipsis>
            </Row>
            <Layout flexGrow={1} />
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
      </NextLink>
      <Layout flexBasis={[20, 20, 32]} />
      <Condition match={index < 2}>
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

export { Interview }
