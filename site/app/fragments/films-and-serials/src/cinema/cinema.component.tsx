import React              from 'react'
import { FC }             from 'react'
import { useEffect }      from 'react'
import { useState }       from 'react'

import { Film as IFilm }  from '@shared/data'
import { Condition }      from '@ui/condition'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { useMockedFilms } from '@shared/data'

import { Tabs as ETabs }  from '../films-and-serials.interface'
import { Card }           from './card'
import { CinemaProps }    from './cinema.interface'

const Cinema: FC<CinemaProps> = ({ selectedTab }) => {
  const { films: filmsData } = useMockedFilms()
  const { films: serialsData } = useMockedFilms()

  const [serials, setSerials] = useState<IFilm[]>([])
  const [films, setFilms] = useState<IFilm[]>([])

  useEffect(() => {
    setFilms(filmsData)
    setSerials(serialsData)

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Condition match={selectedTab === ETabs.FILMS}>
        <Row>
          {films.slice(0, 6).map(({ id, genre, title, rating, creationDate, image }) => (
            <React.Fragment key={id}>
              <Card
                genre={genre}
                title={title}
                rating={rating}
                creationDate={creationDate}
                imageUrl={image.imageUrl}
                altText={image.altText}
              />
              <Layout flexBasis={24} flexShrink={0} />
            </React.Fragment>
          ))}
        </Row>
      </Condition>
      <Condition match={selectedTab === ETabs.SERIALS}>
        <Row>
          {serials.slice(0, 5).map(({ id, genre, title, rating, creationDate, image }) => (
            <React.Fragment key={id}>
              <Card
                genre={genre}
                title={title}
                rating={rating}
                creationDate={creationDate}
                imageUrl={image.imageUrl}
                altText={image.altText}
              />
              <Layout flexBasis={24} flexShrink={0} />
            </React.Fragment>
          ))}
        </Row>
      </Condition>
    </>
  )
}

export { Cinema }
