import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { Person as IPerson }   from '@globals/data'
import { Article as IArticle } from '@globals/data'
import { Film as IFilm }       from '@globals/data'
import { Condition }           from '@ui/condition'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { useMockedArticles }   from '@globals/data'
import { useMockedFilms }      from '@globals/data'
import { useMockedPersons }    from '@globals/data'

import { Articles }            from './articles'
import { Films }               from './films'
import { Persons }             from './persons'
import { useFilteredData }     from '../helpers'

const Results: FC = () => {
  const { films: filmsData } = useMockedFilms()
  const { persons: personsData } = useMockedPersons()
  const { articles: articlesData } = useMockedArticles()

  const [persons, setPersons] = useState<IPerson[]>([])
  const [films, setFilms] = useState<IFilm[]>([])
  const [articles, setArticles] = useState<IArticle[]>([])

  useEffect(() => {
    setPersons(personsData)
    setFilms(filmsData)
    setArticles(articlesData)

    // eslint-disable-next-line
  }, [])

  const filteredFilms = useFilteredData(films)
  const filteredPersons = useFilteredData(persons)
  const filteredArticles = useFilteredData(articles)

  return (
    <>
      <Condition match={!!filteredArticles.length}>
        <Articles filteredArticles={filteredArticles} />
      </Condition>
      <Condition match={!!filteredPersons.length}>
        <Persons filteredPersons={filteredPersons} />
      </Condition>
      <Condition match={!!filteredFilms.length}>
        <Films filteredFilms={filteredFilms} />
      </Condition>
      <Condition
        match={!filteredFilms.length && !filteredPersons.length && !filteredArticles.length}
      >
        <Row>
          <Text color='text.tertiary' fontSize='default' lineHeight='small'>
            <FormattedMessage id='header.no_matches_found' defaultMessage='Совпадений не найдено' />
          </Text>
        </Row>
        <Layout flexBasis={24} />
      </Condition>
    </>
  )
}

export { Results }
