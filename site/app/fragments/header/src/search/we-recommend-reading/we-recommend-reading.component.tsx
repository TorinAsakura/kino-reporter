import React                 from 'react'
import { FC }                from 'react'
import { FormattedMessage }  from 'react-intl'
import { useEffect }         from 'react'
import { useState }          from 'react'

import { Article }           from '@globals/data'
import { ImageBlock }        from '@ui/image'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { NextLink }          from '@ui/link'
import { Text }              from '@ui/text'
import { TextEllipsis }      from '@ui/text'
import { useMockedArticles } from '@globals/data'

const WeRecommendReading: FC = () => {
  const { articles: articlesData } = useMockedArticles()

  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    setArticles(articlesData)

    // eslint-disable-next-line
  }, [])

  return (
    <Column height='auto'>
      <Row>
        <Text textTransform='uppercase' fontWeight='medium' color='text.tertiary' fontSize='atomic'>
          <FormattedMessage id='header.we_recommend_reading' defaultMessage='Советуем почитать' />
        </Text>
      </Row>
      <Layout flexBasis={24} flexShrink={0} />
      {articles.slice(0, 3).map(({ id, title, description, image: { imageUrl, altText } }) => (
        <Column key={id}>
          <NextLink variant='secondary' path='/'>
            <Column>
              <Row>
                <Box
                  minWidth={72}
                  maxWidth={72}
                  height={60}
                  backgroundColor='gray'
                  borderRadius='intermediate'
                  overflow='hidden'
                >
                  <ImageBlock src={imageUrl} alt={altText} width={72} height={60} />
                </Box>
                <Layout flexBasis={16} flexShrink={0} />
                <Column height='auto'>
                  <Layout flexBasis={3.5} />
                  <Row>
                    <Text
                      textTransform='uppercase'
                      fontSize='micro'
                      fontWeight='semiBold'
                      color='text.accent'
                    >
                      {title}
                    </Text>
                  </Row>
                  <Layout flexBasis={8} />
                  <Row height={38} overflow='hidden'>
                    <TextEllipsis
                      lineClamp={2}
                      whiteSpace='normal'
                      fontSize='default'
                      lineHeight='extra'
                    >
                      {description}
                    </TextEllipsis>
                  </Row>
                </Column>
              </Row>
              <Layout flexBasis={24} />
            </Column>
          </NextLink>
        </Column>
      ))}
    </Column>
  )
}

export { WeRecommendReading }
