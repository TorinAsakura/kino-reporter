import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useRouter }        from 'next/router'

import { GhostButton }      from '@ui/button'
import { Divider }          from '@ui/divider'
import { LeftArrowIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'
import { useSearchValue }   from '@app/store'

import { Tabs }             from './tabs'

const SearchTabs: FC = () => {
  const searchValue = useSearchValue()

  const router = useRouter()

  const numberOfMatches = 0

  return (
    <Box width='100%' justifyContent='center' overflow='hidden'>
      <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
      <Column fill maxWidth={1280}>
        <Layout flexBasis={[0, 0, 48]} flexShrink={0} />
        <Box width='100%' flexDirection={['column', 'column', 'row']}>
          <Layout flexBasis={[16, 16, 0]} display={['flex', 'flex', 'none']} />
          <Box width='100%' flexDirection={['row', 'row', 'column']}>
            <Layout flexBasis={[16, 16, 0]} display={['flex', 'flex', 'none']} />
            <Layout alignItems='center' display={['flex', 'flex', 'none']}>
              <GhostButton onClick={() => router.back()}>
                <LeftArrowIcon width={12} height={24} />
              </GhostButton>
            </Layout>
            <Layout flexGrow={[1, 1, 0]} />
            <Layout alignItems='center'>
              <Text
                fontSize={['default', 'default', 'largest']}
                lineHeight='compact'
                fontFamily='lora'
                fontWeight={['normal', 'normal', 'medium']}
              >
                <FormattedMessage id='tabs.search' />
                <Space />
                {searchValue}
              </Text>
            </Layout>
            <Layout flexGrow={[1, 1, 0]} flexBasis={[0, 0, 12]} />
            <Layout display={['none', 'none', 'flex']}>
              <Text color='text.secondary' fontSize='semiRegular' lineHeight='small'>
                {numberOfMatches}
                <Space />
                <FormattedMessage id='tabs.matches' />
              </Text>
            </Layout>
            <Layout flexBasis={[16, 16, 0]} display={['flex', 'flex', 'none']} />
          </Box>
          <Layout flexBasis={[16, 16, 0]} flexGrow={[0, 0, 1]} />
          <Layout flexBasis={[16, 16, 0]} />
          <Row maxWidth={['100%', '100%', 480]}>
            <Layout flexBasis={[16, 16, 0]} flexShrink={0} />
            <Tabs />
          </Row>
        </Box>
        <Layout flexBasis={[0, 0, 48]} flexShrink={0} />
        <Row display={['none', 'none', 'flex']}>
          <Divider backgroundColor='lightBlack' />
        </Row>
      </Column>
      <Layout flexBasis={[0, 0, 80]} flexShrink={0} />
    </Box>
  )
}

export { SearchTabs }
