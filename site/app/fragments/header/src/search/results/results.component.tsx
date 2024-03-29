import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { Person as IPerson }   from '@shared/data'
import { Article as IArticle } from '@shared/data'
import { Film as IFilm }       from '@shared/data'
import { Condition }           from '@ui/condition'
import { ArrowRightIcon }      from '@ui/icons'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { NextLink }            from '@ui/link'
import { Text }                from '@ui/text'
import { useMockedArticles }   from '@shared/data'
import { useMockedFilms }      from '@shared/data'
import { useMockedPersons }    from '@shared/data'

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
    <Column>
      <Condition
        match={
          Boolean(filteredFilms.length) ||
          Boolean(filteredPersons.length) ||
          Boolean(filteredArticles.length)
        }
      >
        <NextLink variant='secondary' path='/'>
          <Row alignItems='center'>
            <Layout>
              <Text fontFamily='lora' fontSize='regular' lineHeight='extra'>
                <FormattedMessage id='header.all_results' defaultMessage='Все результаты' />
              </Text>
            </Layout>
            <Layout flexBasis={4} />
            <Layout>
              <ArrowRightIcon width={18} height={18} />
            </Layout>
          </Row>
        </NextLink>
        <Layout flexBasis={24} />
      </Condition>
      <Condition match={Boolean(filteredArticles.length)}>
        <Articles filteredArticles={filteredArticles} />
      </Condition>
      <Condition match={Boolean(filteredPersons.length)}>
        <Persons filteredPersons={filteredPersons} />
      </Condition>
      <Condition match={Boolean(filteredFilms.length)}>
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
      <Layout flexBasis={[64, 64, 0]} />
    </Column>
  )
}

export { Results }
