import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Ruble }            from '@ui/text'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

const Journal: FC = () => {
  // TODO fetch
  const price = 240

  return (
    <Box width='100%' justifyContent='center' backgroundColor='background.lightGray'>
      <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
      <Column fill maxWidth={1280}>
        <Layout flexBasis={[32, 32, 64]} />
        <Box width='100%' flexDirection={['column-reverse', 'column-reverse', 'row']}>
          <Layout flexBasis={[0, 0, 64]} flexShrink={0} />
          <Column fill maxWidth={['100%', '100%', 512]}>
            <Layout flexBasis={[0, 0, 107]} />
            <Row justifyContent={['center', 'center', 'flex-start']}>
              <Text
                textTransform='uppercase'
                color='text.accent'
                fontWeight={['semiBold', 'semiBold', 'medium']}
                fontSize={['atomic', 'atomic', 'small']}
              >
                <FormattedMessage id='journal.spring_summer_2022' />
              </Text>
            </Row>
            <Layout flexBasis={16} />
            <Row justifyContent={['center', 'center', 'flex-start']}>
              <Text
                fontFamily='lora'
                fontWeight='medium'
                fontSize={['xl', 'xl', 'big']}
                lineHeight='compact'
              >
                <FormattedMessage id='journal.kinoreporter' />
              </Text>
            </Row>
            <Layout flexBasis={[24, 24, 32]} />
            <Row justifyContent={['center', 'center', 'flex-start']}>
              <Layout width={[160, 160, 167]}>
                <Button variant='buy' size='normalRounded'>
                  <Text color='text.white' fontWeight='medium' fontSize='semiRegular'>
                    <FormattedMessage id='journal.buy' />
                  </Text>
                  <Space />
                  {price}
                  <Space />
                  <Ruble />
                </Button>
              </Layout>
            </Row>
            <Layout flexBasis={[0, 0, 107]} />
          </Column>
          <Layout flexBasis={[0, 0, 64]} flexShrink={0} />
          <Box
            width='100%'
            justifyContent='center'
            maxWidth={['100%', '100%', 800]}
            height={[320, 320, 360]}
            position='relative'
          >
            <Box
              width='100%'
              maxWidth={['100%', 500, 800]}
              height={[465, 465, 600]}
              top={[-120, -120, -180]}
              position='absolute'
            >
              <ImageBlock src='images/kino_reporter_big.png' />
            </Box>
          </Box>
          <Layout flexBasis={[0, 0, 0]} flexShrink={0} />
        </Box>
        <Layout flexBasis={[48, 48, 64]} />
      </Column>
      <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
    </Box>
  )
}

export { Journal }
