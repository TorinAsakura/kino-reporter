import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { Gallery }          from './gallery'

const MainEditor: FC = () => (
  <Box width='100%' justifyContent='center'>
    <Layout flexBasis={[0, 0, 80]} />
    <Column fill maxWidth={1280}>
      <Layout flexBasis={[24, 24, 64]} />
      <Box
        justifyContent='center'
        backgroundColor='background.dark'
        borderRadius={['none', 'none', 'voluminous']}
      >
        <Layout flexBasis={[0, 0, 48]} flexShrink={0} />
        <Column fill maxWidth={['100%', '100%', 592]} overflow='hidden'>
          <Layout flexBasis={[40, 40, 48]} />
          <Row justifyContent={['center', 'center', 'flex-start']}>
            <Text
              color='text.inverseSecondary'
              textTransform='uppercase'
              fontSize={['atomic', 'atomic', 'small']}
              fontWeight={['semiBold', 'semiBold', 'medium']}
            >
              <FormattedMessage id='main_editor.main_editor' defaultMessage='Главный редактор' />
            </Text>
          </Row>
          <Layout flexBasis={16} />
          <Row
            alignItems='center'
            justifyContent={['center', 'center', 'flex-start']}
            maxWidth={['100%', '100%', 480]}
          >
            <Layout flexBasis={[32, 32, 0]} flexShrink={0} />
            <Text
              textAlign={['center', 'center', 'start']}
              color='text.white'
              lineHeight='extra'
              fontFamily='lora'
              fontWeight='medium'
              fontSize={['semiLarge', 'semiLarge', 'large']}
            >
              <FormattedMessage id='main_editor.description' />
            </Text>
            <Layout flexBasis={[32, 32, 0]} flexShrink={0} />
          </Row>
          <Layout flexBasis={[32, 32, 0]} />
          <Layout
            justifyContent='center'
            width='200%'
            overflow='hidden'
            display={['flex', 'flex', 'none']}
          >
            <Gallery />
          </Layout>
          <Layout flexBasis={[32, 32, 79]} />
          <Box
            width='100%'
            justifyContent={['center', 'center', 'flex-start']}
            alignItems='center'
            flexDirection={['column', 'column', 'row']}
          >
            <Layout width={194} justifyContent={['center', 'center', 'flex-start']}>
              <Button variant='play' size='normalRounded'>
                <Text fontWeight='medium' fontSize='semiRegular'>
                  <FormattedMessage id='main_editor.read' defaultMessage='Читать' />
                </Text>
              </Button>
            </Layout>
            <Layout flexBasis={24} />
            <Layout justifyContent={['center', 'center', 'flex-start']} alignItems='center'>
              <NextLink path='/all-articles' variant='yam'>
                <FormattedMessage id='main_editor.all_articles' defaultMessage='Все статьи' />
              </NextLink>
            </Layout>
          </Box>
          <Layout flexBasis={[40, 40, 48]} />
        </Column>
        <Layout flexGrow={[0, 0, 1]} />
        <Layout display={['none', 'none', 'flex']}>
          <Gallery />
        </Layout>
        <Layout flexBasis={[0, 0, 132]} flexShrink={0} />
      </Box>
      <Layout flexBasis={[32, 32, 48]} />
    </Column>
    <Layout flexBasis={[0, 0, 80]} />
  </Box>
)

export { MainEditor }
