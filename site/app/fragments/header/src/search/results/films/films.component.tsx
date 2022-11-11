import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { TextEllipsis }     from '@ui/text'
import { formattedDate }    from '@shared/utils'

import { FilmsProps }       from './films.interface'

const Films: FC<FilmsProps> = ({ filteredFilms }) => (
  <Column height='auto'>
    <Row>
      <Text textTransform='uppercase' fontWeight='medium' color='text.tertiary' fontSize='atomic'>
        <FormattedMessage id='header.films' defaultMessage='Фильмы' />
      </Text>
    </Row>
    <Layout flexBasis={24} />
    {filteredFilms.slice(0, 3).map(({
      id,
      genre,
      title,
      country,
      creationDate,
      image: { imageUrl, altText },
    }) => (
      <Column key={id}>
        <NextLink variant='secondary' path='/'>
          <Column key={id}>
            <Row>
              <Box
                minWidth={45}
                maxWidth={45}
                height={54}
                backgroundColor='gray'
                borderRadius='intermediate'
                overflow='hidden'
              >
                <ImageBlock src={imageUrl} alt={altText} width={45} height={54} />
              </Box>
              <Layout flexBasis={16} flexShrink={0} />
              <Column height='auto'>
                <Layout flexBasis={5.5} />
                <Row overflow='hidden' maxWidth={249}>
                  <TextEllipsis
                    lineClamp={1}
                    overflow='hidden'
                    whiteSpace='normal'
                    fontSize='semiRegular'
                  >
                    {title}
                  </TextEllipsis>
                </Row>
                <Layout flexBasis={8} />
                <Row alignItems='center'>
                  <Layout>
                    <Text color='text.tertiary' fontSize='small' lineHeight='extra'>
                      {genre}
                    </Text>
                  </Layout>
                  <Layout flexBasis={5} flexShrink={0} />
                  <Layout>
                    <Box width={2} height={2} backgroundColor='secondary' borderRadius='max' />
                  </Layout>
                  <Layout flexBasis={5} flexShrink={0} />
                  <Layout>
                    <Text color='text.tertiary' fontSize='small' lineHeight='extra'>
                      {country}
                    </Text>
                  </Layout>
                  <Layout flexBasis={5} flexShrink={0} />
                  <Layout>
                    <Box width={2} height={2} backgroundColor='secondary' borderRadius='max' />
                  </Layout>
                  <Layout flexBasis={5} flexShrink={0} />
                  <Layout>
                    <Text color='text.tertiary' fontSize='small' lineHeight='extra'>
                      {formattedDate(creationDate)}
                    </Text>
                  </Layout>
                </Row>
              </Column>
            </Row>
          </Column>
        </NextLink>
        <Layout flexBasis={24} />
      </Column>
    ))}
  </Column>
)

export { Films }
