import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useEffect }        from 'react'
import { useState }         from 'react'

import { News as INews }    from '@shared/data'
import { Divider }          from '@ui/divider'
import { ArrowRightIcon }   from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { TextEllipsis }     from '@ui/text'
import { Hover }            from '@ui/utils'
import { useMockedNews }    from '@shared/data'
import { formattedDate }    from '@shared/utils'

const News: FC = () => {
  const { news: newsData } = useMockedNews()

  const [news, setNews] = useState<INews[]>([])

  useEffect(() => {
    setNews(newsData)

    // eslint-disable-next-line
  }, [])

  return (
    <Box width='100%' maxWidth={404}>
      <Column fill>
        <Row>
          <Hover>
            {(hover, hoverProps) => (
              <NextLink variant='secondary' path='/news' {...hoverProps}>
                <Row alignItems='center'>
                  <Text
                    fontWeight='medium'
                    fontFamily='lora'
                    fontSize={['xl', 'xl', 'big']}
                    lineHeight='compact'
                  >
                    <FormattedMessage id='selections_and_news.news' defaultMessage='Новости' />
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
        <Layout flexBasis={32} flexShrink={0} />
        <Column fill>
          <Divider backgroundColor='gray' />
          {news.slice(0, 6).map(({ id, title, date }) => (
            <NextLink variant='secondary' path='/'>
              <Column fill key={id}>
                <Layout flexBasis={26} />
                <Row maxHeight={38} overflow='hidden'>
                  <TextEllipsis
                    whiteSpace='normal'
                    lineClamp={2}
                    fontSize='semiRegular'
                    lineHeight='extra'
                  >
                    {title}
                  </TextEllipsis>
                </Row>
                <Layout flexBasis={12} />
                <Row>
                  <Text fontSize='small' lineHeight='compact' color='text.secondary'>
                    {formattedDate('fullDate', date)}
                  </Text>
                </Row>
                <Layout flexBasis={26} />
                <Divider backgroundColor='gray' />
              </Column>
            </NextLink>
          ))}
        </Column>
      </Column>
    </Box>
  )
}

export { News }
