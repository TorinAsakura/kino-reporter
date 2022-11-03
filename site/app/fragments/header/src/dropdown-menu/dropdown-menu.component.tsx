import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'

import { Button }             from '@ui/button'
import { Divider }            from '@ui/divider'
import { ArrowRightIcon }     from '@ui/icons'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { NextLink }           from '@ui/link'
import { Text }               from '@ui/text'

import { Promo }              from './promo'
import { useNavigationLinks } from '../data'

const DropdownMenu: FC = () => {
  const { links } = useNavigationLinks()

  return (
    <Box
      justifyContent='center'
      backgroundColor='white'
      borderRadius={['none', 'none', 'bottomSide']}
    >
      <Box
        justifyContent='center'
        maxWidth={1440}
        width='100%'
        height={['calc(100vh - 64px)', 'calc(100vh - 64px)', 'auto']}
      >
        <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
        <Column fill maxWidth={624}>
          <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
          <Column>
            <Column height='auto'>
              {links.data.drawer.map(({ title, path }, index) => (
                <React.Fragment key={title}>
                  <NextLink path={path}>
                    <Row alignItems='center'>
                      <Layout>
                        <Text
                          fontWeight='medium'
                          fontFamily='lora'
                          fontSize={['xl', 'xl', 'big']}
                          lineHeight='compact'
                        >
                          {title}
                        </Text>
                      </Layout>
                      <Layout flexBasis={6} />
                      <Column>
                        <Layout flexBasis={5} />
                        <Layout alignItems='center'>
                          <ArrowRightIcon width={18} height={20} />
                        </Layout>
                      </Column>
                    </Row>
                  </NextLink>
                  <Layout flexBasis={links.data.drawer.length - 1 !== index ? 32 : 0} />
                </React.Fragment>
              ))}
            </Column>
            <Layout flexBasis={[0, 0, 110]} flexGrow={[1, 1, 0]} />
            <Layout display={['flex', 'flex', 'none']}>
              <Promo />
            </Layout>
            <Layout display={['none', 'none', 'flex']}>
              <Divider backgroundColor='lightBlack' />
            </Layout>
            <Layout flexBasis={[16, 16, 24]} />
            <Row display={['none', 'none', 'flex']}>
              <Layout>
                <NextLink path='/'>
                  <Text fontFamily='lora' fontSize='semiLarge' lineHeight='extra'>
                    <FormattedMessage id='header.about_us' defaultMessage='О нас' />
                  </Text>
                </NextLink>
              </Layout>
              <Layout flexBasis={48} />
              <Layout>
                <NextLink path='/'>
                  <Text fontFamily='lora' fontSize='semiLarge' lineHeight='extra'>
                    <FormattedMessage id='header.contacts' defaultMessage='Контакты' />
                  </Text>
                </NextLink>
              </Layout>
            </Row>
          </Column>
          <Row display={['flex', 'flex', 'none']}>
            <Row>
              <Button variant='secondary' size='small'>
                <Text>
                  <FormattedMessage id='header.about_us' defaultMessage='О нас' />
                </Text>
              </Button>
            </Row>
            <Layout flexBasis={16} flexShrink={0} />
            <Row>
              <Button variant='secondary' size='small'>
                <Text>
                  <FormattedMessage id='header.contacts' defaultMessage='Контакты' />
                </Text>
              </Button>
            </Row>
          </Row>
          <Layout flexBasis={[16, 16, 24]} flexShrink={0} />
        </Column>
        <Layout display={['none', 'none', 'flex']} flexGrow={[0, 0, 1]} />
        <Column display={['none', 'none', 'flex']}>
          <Layout flexBasis={32} />
          <Promo />
        </Column>
        <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
      </Box>
    </Box>
  )
}

export { DropdownMenu }
