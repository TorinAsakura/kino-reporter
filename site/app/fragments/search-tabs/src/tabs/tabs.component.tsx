import React           from 'react'
import { Children }    from 'react'
import { FC }          from 'react'
import { useMemo }     from 'react'
import { useState }    from 'react'
import { useIntl }     from 'react-intl'

import { Button }      from '@ui/button'
import { SwiperSlide } from '@ui/carousel'
import { Carousel }    from '@ui/carousel'
import { Layout }      from '@ui/layout'
import { Text }        from '@ui/text'

const Tabs: FC = () => {
  const intl = useIntl()

  const [activeTab, setActiveTab] = useState<string>(intl.formatMessage({ id: 'tabs.all' }))
  const [tabs] = useState<string[]>([
    intl.formatMessage({ id: 'tabs.all' }),
    intl.formatMessage({ id: 'tabs.materials' }),
    intl.formatMessage({ id: 'tabs.persons' }),
    intl.formatMessage({ id: 'tabs.cinema' }),
  ])

  const sliderChildren = useMemo(
    () =>
      tabs.map((tab) => (
        <Button
          style={{ width: 'auto' }}
          size='semiSmall'
          variant={tab === activeTab ? 'tabCategoryOn' : 'tabCategoryOff'}
          onClick={() => setActiveTab(tab)}
        >
          <Text fontSize='semiRegular' fontWeight='medium'>
            {tab}
          </Text>
        </Button>
      )),
    [tabs, activeTab]
  )

  return (
    <>
      <Layout display={['none', 'none', 'fex']}>
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            <Button
              style={{ paddingLeft: 20, paddingRight: 20 }}
              size='fullRounded'
              variant={tab === activeTab ? 'tabCategoryOn' : 'tabCategoryOff'}
              onClick={() => setActiveTab(tab)}
            >
              <Text fontSize='semiRegular' fontWeight='medium'>
                {tab}
              </Text>
            </Button>
            <Layout flexBasis={tabs.length - 1 === index ? 0 : 8} flexShrink={0} />
          </React.Fragment>
        ))}
      </Layout>
      <Layout display={['flex', 'flex', 'none']}>
        <Carousel
          freeMode
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
        >
          {Children.map(sliderChildren, (child) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Carousel>
      </Layout>
    </>
  )
}

export { Tabs }
