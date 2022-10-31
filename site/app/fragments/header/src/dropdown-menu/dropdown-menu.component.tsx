import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'

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
    <Box justifyContent='center' backgroundColor='white' borderRadius='bottomSide'>
      <Box justifyContent='center' maxWidth={1440} width='100%'>
        <Layout flexBasis={80} />
        <Column fill width='100%' maxWidth={624}>
          <Layout flexBasis={32} />
          <Column>
            <Column>
              {links.data.drawer.map(({ title, path }, index) => (
                <React.Fragment key={title}>
                  <NextLink path={path}>
                    <Row>
                      <Layout>
                        <Text
                          fontWeight='medium'
                          fontFamily='lora'
                          fontSize='big'
                          lineHeight='compact'
                        >
                          {title}
                        </Text>
                      </Layout>
                      <Layout flexBasis={6} />
                      <Layout alignItems='center'>
                        <ArrowRightIcon width={14} height={24} />
                      </Layout>
                    </Row>
                  </NextLink>
                  <Layout flexBasis={links.data.drawer.length - 1 !== index ? 32 : 0} />
                </React.Fragment>
              ))}
            </Column>
            <Layout flexBasis={110} />
            <Layout>
              <Divider backgroundColor='lightBlack' />
            </Layout>
            <Layout flexBasis={24} />
            <Row>
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
          <Layout flexBasis={24} />
        </Column>
        <Layout flexGrow={1} />
        <Column>
          <Layout flexBasis={32} />
          <Promo />
        </Column>
        <Layout flexBasis={80} />
      </Box>
    </Box>
  )
}

export { DropdownMenu }
