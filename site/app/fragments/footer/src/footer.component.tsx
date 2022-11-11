import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { LogoIcon }         from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { SocialLinks }      from './social-links'
import { useLinks }         from './data'

const Footer: FC = () => {
  const { links } = useLinks()

  return (
    <Box width='100%' backgroundColor='background.lightGray'>
      <Column fill>
        <Row>
          <Divider backgroundColor='lightBlack' />
        </Row>
        <Layout flexBasis={[0, 0, 47]} flexShrink={0} />
        <Row justifyContent='center'>
          <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
          <Column fill maxWidth={1280} justifyContent='center'>
            <Box width='100%' flexDirection={['column-reverse', 'column-reverse', 'row']}>
              <Column fill>
                <Layout display={['none', 'none', 'flex']}>
                  <NextLink path='/'>
                    <LogoIcon width={123} height={48} />
                  </NextLink>
                </Layout>
                <Layout flexBasis={[0, 0, 32]} />
                <Layout width='100%'>
                  <SocialLinks />
                </Layout>
              </Column>
              <Layout flexGrow={[0, 0, 1]} />
              <Row
                flexDirection={['column', 'column', 'row']}
                justifyContent='center'
                maxWidth={['100%', '100%', 624]}
              >
                <Column fill justifyContent='center' maxWidth={['100%', '100%', 296]}>
                  <Layout flexBasis={[32, 32, 11]} />
                  {links.slice(0, 3).map(({ title, path }) => (
                    <React.Fragment key={title}>
                      <Layout justifyContent={['center', 'center', 'flex-start']}>
                        <NextLink variant='secondary' path={path}>
                          {title}
                        </NextLink>
                      </Layout>
                      <Layout flexBasis={24} flexShrink={0} />
                    </React.Fragment>
                  ))}
                </Column>
                <Layout flexBasis={[0, 0, 32]} />
                <Column fill justifyContent='center' maxWidth={['100%', '100%', 296]}>
                  <Layout flexBasis={[0, 0, 11]} />
                  {links.slice(3, 6).map(({ title, path }) => (
                    <React.Fragment key={title}>
                      <Layout justifyContent={['center', 'center', 'flex-start']}>
                        <NextLink variant='secondary' path={path}>
                          {title}
                        </NextLink>
                      </Layout>
                      <Layout flexBasis={24} />
                    </React.Fragment>
                  ))}
                  <Layout flexBasis={[8, 8, 0]} />
                </Column>
              </Row>
            </Box>
          </Column>
          <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
        </Row>
        <Column fill>
          <Layout flexBasis={[0, 0, 48]} flexShrink={0} />
          <Row display={['none', 'none', 'flex']}>
            <Divider backgroundColor='lightBlack' />
          </Row>
          <Row justifyContent='center'>
            <Column fill maxWidth={1280} justifyContent='center'>
              <Layout flexBasis={[32, 32, 20]} />
              <Row justifyContent={['center', 'center', 'flex-start']}>
                <Text
                  color='text.secondary'
                  lineHeight='compact'
                  fontSize={['semiSmall', 'semiSmall', 'default']}
                >
                  <FormattedMessage id='footer.copyright' />
                </Text>
              </Row>
              <Layout flexBasis={[32, 32, 20]} />
            </Column>
          </Row>
        </Column>
      </Column>
    </Box>
  )
}

export { Footer }
