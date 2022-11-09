import React                       from 'react'
import { FC }                      from 'react'
import { Children }                from 'react'
import { FormattedMessage }        from 'react-intl'
import { useMemo }                 from 'react'
import { useEffect }               from 'react'
import { useState }                from 'react'

import { Selection as ISelection } from '@shared/data'
import { SwiperSlide }             from '@ui/carousel'
import { Carousel }                from '@ui/carousel'
import { ArrowRightIcon }          from '@ui/icons'
import { Column }                  from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Row }                     from '@ui/layout'
import { NextLink }                from '@ui/link'
import { Text }                    from '@ui/text'
import { Hover }                   from '@ui/utils'
import { useMockedSelections }     from '@shared/data'

import { MainPreview }             from './main-preview'
import { SelectionDesktop }        from './selection'
import { SelectionMobile }         from './selection'

const Selections: FC = () => {
  const { selections: selectionsData } = useMockedSelections()

  const [selections, setSelections] = useState<ISelection[]>([])

  useEffect(() => {
    setSelections(selectionsData)

    // eslint-disable-next-line
  }, [])

  const sliderChildren = useMemo(
    () =>
      selections
        .slice(1, 4)
        .map(({ id, title, description, date, image: { imageUrl, altText } }, index) => (
          <SelectionMobile
            key={id}
            index={index}
            title={title}
            description={description}
            date={date}
            imageUrl={imageUrl}
            altText={altText}
          />
        )),
    [selections]
  )

  return (
    <Row width='100%' maxWidth={844}>
      <Column fill>
        <Row>
          <Layout flexBasis={[16, 16, 0]} />
          <Hover>
            {(hover, hoverProps) => (
              <NextLink variant='secondary' path='/selections' {...hoverProps}>
                <Row alignItems='center'>
                  <Text
                    fontWeight='medium'
                    fontFamily='lora'
                    fontSize={['xl', 'xl', 'big']}
                    lineHeight='compact'
                  >
                    <FormattedMessage
                      id='selections_and_news.selections'
                      defaultMessage='Подборки'
                    />
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
        <Row flexWrap='wrap' display={['none', 'none', 'flex']}>
          {selections.slice(0, 4).map((
            { id, title, description, date, image: { imageUrl, altText } },
            index
          ) => (
            <SelectionDesktop
              key={id}
              index={index}
              title={title}
              description={description}
              date={date}
              imageUrl={imageUrl}
              altText={altText}
            />
          ))}
        </Row>
        <Column width='100%' display={['flex', 'flex', 'none']}>
          <Row>
            <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
            {selections.slice(0, 1).map(({
              title,
              description,
              date,
              image: { imageUrl, altText },
            }) => (
              <MainPreview
                imageUrl={imageUrl}
                altText={altText}
                title={title}
                description={description}
                date={date}
              />
            ))}
            <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
          </Row>
          <Layout flexBasis={20} />
          <Row>
            <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
            <Carousel
              freeMode
              breakpoints={{
                0: {
                  slidesPerView: 1.7,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                },
              }}
            >
              {Children.map(sliderChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Carousel>
          </Row>
        </Column>
      </Column>
    </Row>
  )
}

export { Selections }
