import React                       from 'react'
import { FC }                      from 'react'
import { FormattedMessage }        from 'react-intl'
import { useEffect }               from 'react'
import { useState }                from 'react'

import { Selection as ISelection } from '@shared/data'
import { ArrowRightIcon }          from '@ui/icons'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Row }                     from '@ui/layout'
import { NextLink }                from '@ui/link'
import { Text }                    from '@ui/text'
import { Hover }                   from '@ui/utils'
import { useMockedSelections }     from '@shared/data'

import { Selection }               from './selection'

const Selections: FC = () => {
  const { selections: selectionsData } = useMockedSelections()

  const [selection, setSelection] = useState<ISelection>([])

  useEffect(() => {
    setSelection(selectionsData)

    // eslint-disable-next-line
  }, [])

  return (
    <Box width='100%' maxWidth={844}>
      <Column fill>
        <Row>
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
        <Row flexWrap='wrap'>
          {selection.slice(0, 4).map((
            { id, title, description, date, image: { imageUrl, altText } },
            index
          ) => (
            <Selection
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
      </Column>
    </Box>
  )
}

export { Selections }
