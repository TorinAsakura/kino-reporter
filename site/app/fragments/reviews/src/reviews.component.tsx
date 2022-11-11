import React                 from 'react'
import { FC }                from 'react'
import { FormattedMessage }  from 'react-intl'
import { useEffect }         from 'react'
import { useState }          from 'react'

import { Review as IReview } from '@shared/data'
import { Divider }           from '@ui/divider'
import { ArrowRightIcon }    from '@ui/icons'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { NextLink }          from '@ui/link'
import { Text }              from '@ui/text'
import { Hover }             from '@ui/utils'
import { useMockedReviews }  from '@shared/data'

import { Review }            from './review'

const Reviews: FC = () => {
  const { reviews: reviewsData } = useMockedReviews()

  const [reviews, setReviews] = useState<IReview[]>([])

  useEffect(() => {
    setReviews(reviewsData)

    // eslint-disable-next-line
  }, [])

  return (
    <Box width='100%' justifyContent='center'>
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
      <Column fill maxWidth={1280}>
        <Layout flexBasis={[0, 0, 48]} />
        <Row>
          <Hover>
            {(hover, hoverProps) => (
              <NextLink variant='secondary' path='/reviews' {...hoverProps}>
                <Row alignItems='center'>
                  <Text
                    fontWeight='medium'
                    fontFamily='lora'
                    fontSize={['xl', 'xl', 'big']}
                    lineHeight='compact'
                  >
                    <FormattedMessage id='reviews.reviews' defaultMessage='Рецензии' />
                  </Text>
                  <Layout flexBasis={[8, 8, 6]} />
                  <Column>
                    <Layout flexBasis={4} />
                    <Layout display={['none', 'none', 'flex']}>
                      <ArrowRightIcon width={22} height={20} color={hover ? 'accent' : 'black'} />
                    </Layout>
                    <Layout display={['flex', 'flex', 'none']}>
                      <ArrowRightIcon width={16} height={16} color={hover ? 'accent' : 'black'} />
                    </Layout>
                  </Column>
                </Row>
              </NextLink>
            )}
          </Hover>
        </Row>
        <Layout flexBasis={[20, 20, 32]} />
        <Row display={['flex', 'flex', 'none']}>
          <Divider backgroundColor='gray' />
        </Row>
        <Layout flexBasis={[20, 20, 0]} />
        <Row flexWrap='wrap' display={['none', 'none', 'flex']}>
          {reviews.slice(0, 6).map((
            { id, title, date, author, image: { imageUrl, altText } },
            index
          ) => (
            <Review
              key={id}
              title={title}
              date={date}
              author={author}
              imageUrl={imageUrl}
              altText={altText}
              index={index}
            />
          ))}
        </Row>
        <Column display={['flex', 'flex', 'none']}>
          {reviews.slice(0, 3).map((
            { id, title, date, author, image: { imageUrl, altText } },
            index
          ) => (
            <Review
              key={id}
              lastItem={reviews.slice(0, 3).length - 1}
              title={title}
              date={date}
              author={author}
              imageUrl={imageUrl}
              altText={altText}
              index={index}
            />
          ))}
        </Column>
        <Layout flexBasis={[12, 12, 32]} />
      </Column>
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
    </Box>
  )
}

export { Reviews }
