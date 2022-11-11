import React                 from 'react'
import { FC }                from 'react'
import { useEffect }         from 'react'
import { useState }          from 'react'

import { Article }           from '@shared/data'
import { BoxGradient }       from '@ui/background'
import { Condition }         from '@ui/condition'
import { Divider }           from '@ui/divider'
import { PinIcon }           from '@ui/icons'
import { ImageBlock }        from '@ui/image'
import { Column }            from '@ui/layout'
import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { NextLink }          from '@ui/link'
import { Text }              from '@ui/text'
import { TextEllipsis }      from '@ui/text'
import { useMockedArticles } from '@shared/data'
import { formattedDate }     from '@shared/utils'

const Articles: FC = () => {
  const { articles: articlesData } = useMockedArticles()

  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    setArticles(articlesData)

    // eslint-disable-next-line
  }, [])

  return (
    <Column width='100%' maxWidth={['100%', '100%', 405]}>
      {articles.slice(0, 4).map(({ id, title, description, date, image }, index) => (
        <Column key={id}>
          <NextLink variant='secondary' path='/'>
            <Column>
              <Row>
                <Box
                  minWidth={[120, 120, 148]}
                  maxWidth={[120, 120, 148]}
                  height={[100, 100, 108]}
                  backgroundColor='gray'
                  borderRadius='intermediate'
                  overflow='hidden'
                  zIndex={10}
                  position='relative'
                >
                  <Box
                    minWidth={148}
                    maxWidth={148}
                    height={108}
                    zIndex='-1'
                    position='absolute'
                    display={['none', 'none', 'flex']}
                  >
                    <ImageBlock src={image.imageUrl} alt={image.altText} width={72} height={60} />
                  </Box>
                  <Box
                    minWidth={120}
                    maxWidth={120}
                    height={100}
                    zIndex='-1'
                    position='absolute'
                    display={['flex', 'flex', 'none']}
                  >
                    <ImageBlock src={image.imageUrl} alt={image.altText} width={72} height={60} />
                  </Box>
                  <Layout flexBasis={6} />
                  <Column>
                    <Layout flexBasis={6} />
                    <BoxGradient
                      p='6px'
                      border='lightWhite'
                      blur={2}
                      gradient='white'
                      borderRadius='normal'
                    >
                      <PinIcon color='white' width={10} height={10} />
                    </BoxGradient>
                  </Column>
                </Box>
                <Layout flexBasis={16} flexShrink={0} />
                <Column height='auto'>
                  <Layout flexBasis={2} />
                  <Row>
                    <Text
                      textTransform='uppercase'
                      fontSize={['micro', 'micro', 'atomic']}
                      fontWeight='semiBold'
                      color='text.accent'
                    >
                      {title}
                    </Text>
                  </Row>
                  <Layout flexBasis={8} />
                  <Row height={57} overflow='hidden'>
                    <TextEllipsis
                      lineClamp={3}
                      whiteSpace='normal'
                      fontSize={['default', 'default', 'semiRegular']}
                      lineHeight='extra'
                    >
                      {description}
                    </TextEllipsis>
                  </Row>
                  <Layout flexBasis={12} />
                  <Row>
                    <Text
                      fontSize={['atomic', 'atomic', 'small']}
                      lineHeight='compact'
                      color='text.secondary'
                    >
                      {formattedDate('fullDate', date)}
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </NextLink>
          <Condition match={articles.slice(0, 4).length - 1 !== index}>
            <Layout flexBasis={[20, 20, 23.5]} />
            <Divider backgroundColor='lightBlack' />
            <Layout flexBasis={[20, 20, 23.5]} />
          </Condition>
        </Column>
      ))}
    </Column>
  )
}

export { Articles }
