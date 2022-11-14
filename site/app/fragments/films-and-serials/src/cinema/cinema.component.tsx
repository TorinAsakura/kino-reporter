import React              from 'react'
import { FC }             from 'react'
import { Children }       from 'react'
import { memo }           from 'react'
import { useMemo }        from 'react'
import { useEffect }      from 'react'
import { useState }       from 'react'

import { Film as IFilm }  from '@shared/data'
import { SwiperSlide }    from '@ui/carousel'
import { Carousel }       from '@ui/carousel'
import { Condition }      from '@ui/condition'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { useMockedFilms } from '@shared/data'

import { Tabs as ETabs }  from '../films-and-serials.interface'
import { Card }           from './card'
import { CinemaProps }    from './cinema.interface'

const breakpoints = {
  0: {
    slidesPerView: 2.65,
    spaceBetween: 0,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 12,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 12,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 12,
  },
  1380: {
    slidesPerView: 6,
    spaceBetween: 12,
  },
}

const Cinema: FC<CinemaProps> = memo(({ selectedTab }) => {
  const { films: filmsData } = useMockedFilms()
  const { films: serialsData } = useMockedFilms()

  const [serials, setSerials] = useState<IFilm[]>([])
  const [films, setFilms] = useState<IFilm[]>([])

  useEffect(() => {
    setFilms(filmsData)
    setSerials(serialsData)

    // eslint-disable-next-line
  }, [])

  const filmsChildren = useMemo(
    () =>
      films
        .slice(0, 6)
        .map(({ id, genre, title, rating, creationDate, image }) => (
          <Card
            key={id}
            genre={genre}
            title={title}
            rating={rating}
            creationDate={creationDate}
            imageUrl={image.imageUrl}
            altText={image.altText}
          />
        )),
    [films]
  )

  const serialsChildren = useMemo(
    () =>
      serials
        .slice(0, 6)
        .map(({ id, genre, title, rating, creationDate, image }) => (
          <Card
            key={id}
            genre={genre}
            title={title}
            rating={rating}
            creationDate={creationDate}
            imageUrl={image.imageUrl}
            altText={image.altText}
          />
        )),
    [serials]
  )

  return (
    <>
      <Condition match={selectedTab === ETabs.FILMS}>
        <Row>
          <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
          <Carousel freeMode breakpoints={breakpoints}>
            {Children.map(filmsChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Carousel>
        </Row>
      </Condition>
      <Condition match={selectedTab === ETabs.SERIALS}>
        <Row>
          <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
          <Carousel freeMode breakpoints={breakpoints}>
            {Children.map(serialsChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Carousel>
        </Row>
      </Condition>
    </>
  )
})

export { Cinema }
