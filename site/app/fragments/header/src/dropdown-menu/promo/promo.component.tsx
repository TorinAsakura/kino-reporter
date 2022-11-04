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

const Promo: FC = () => (
  <Box
    width={[343, 343, 405]}
    height={[120, 120, 160]}
    zIndex={20}
    position='relative'
    backgroundColor='background.lightGray'
    borderRadius='default'
  >
    <NextLink variant='secondary' path='/'>
      <Layout width='100%' height='100%'>
        <Layout flexBasis={16} flexShrink={0} />
        <Column fill>
          <Layout flexBasis={16} />
          <Row>
            <Text fontWeight='medium' fontSize='small' color='accent' textTransform='uppercase'>
              <FormattedMessage id='header.promo' defaultMessage='Весна-лето 2022' />
            </Text>
          </Row>
          <Layout flexGrow={1} />
          <Row>
            <Text zIndex={20} fontFamily='lora' fontSize='semiLarge' lineHeight='extra'>
              <FormattedMessage id='header.kino_reporter' defaultMessage='Кино Репортер №2' />
            </Text>
          </Row>
          <Layout flexBasis={16} />
        </Column>
        <Box
          position='absolute'
          top={-60}
          right={-60}
          zIndex={-1}
          display={['none', 'none', 'flex']}
        >
          <ImageBlock width={310} height={232} src='images/kino_reporter.png' />
        </Box>
        <Box
          width={232}
          height={174}
          position='absolute'
          top={-45}
          right={-40}
          zIndex={-1}
          display={['flex', 'flex', 'none']}
        >
          <ImageBlock width={232} height={174} src='images/kino_reporter.png' />
        </Box>
        <Layout flexBasis={15} />
      </Layout>
    </NextLink>
  </Box>
)

export { Promo }
