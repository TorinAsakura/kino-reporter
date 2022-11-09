import React                       from 'react'
import { FC }                      from 'react'
import { FormattedMessage }        from 'react-intl'
import { useEffect }               from 'react'
import { useState }                from 'react'

import { Interview as IInterview } from '@shared/data'
import { Divider }                 from '@ui/divider'
import { ArrowRightIcon }          from '@ui/icons'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Row }                     from '@ui/layout'
import { NextLink }                from '@ui/link'
import { Text }                    from '@ui/text'
import { Hover }                   from '@ui/utils'
import { useMockedInterviews }     from '@shared/data'

import { Interview }               from './interview'

const Interviews: FC = () => {
  const { interviews: interviewsData } = useMockedInterviews()

  const [interviews, setInterviews] = useState<IInterview[]>([])

  useEffect(() => {
    setInterviews(interviewsData)

    // eslint-disable-next-line
  }, [])

  return (
    <Box width='100%' justifyContent='center'>
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
      <Column fill maxWidth={1280}>
        <Layout flexBasis={[0, 0, 48]} />
        <Row>
          <Hover>
            {(hover, hoverProps) => (
              <NextLink variant='secondary' path='/interviews' {...hoverProps}>
                <Row alignItems='center'>
                  <Text
                    fontWeight='medium'
                    fontFamily='lora'
                    fontSize={['xl', 'xl', 'big']}
                    lineHeight='compact'
                  >
                    <FormattedMessage id='interviews.interviews' defaultMessage='Интервью' />
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
        <Row display={['flex', 'flex', 'none']}>
          <Divider backgroundColor='gray' />
        </Row>
        <Layout flexBasis={[20, 20, 0]} />
        <Row flexWrap='wrap' display={['none', 'none', 'flex']}>
          {interviews.slice(0, 6).map((
            { id, title, date, description, image: { imageUrl, altText } },
            index
          ) => (
            <Interview
              key={id}
              title={title}
              date={date}
              description={description}
              imageUrl={imageUrl}
              altText={altText}
              index={index}
            />
          ))}
        </Row>
        <Column display={['flex', 'flex', 'none']}>
          {interviews.slice(0, 5).map((
            { id, title, date, description, image: { imageUrl, altText } },
            index
          ) => (
            <Interview
              key={id}
              title={title}
              date={date}
              description={description}
              imageUrl={imageUrl}
              altText={altText}
              index={index}
            />
          ))}
        </Column>
        <Layout flexBasis={[12, 12, 32]} />
      </Column>
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
    </Box>
  )
}

export { Interviews }
