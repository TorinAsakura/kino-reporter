import styled               from '@emotion/styled'
import { keyframes }        from '@emotion/react'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const infinityLine = keyframes`
   0%   { transform: translateX(0) }
 100% { transform: translate(-50%) }
`

const AnimationBox = styled(Box)({
  animation: `${infinityLine} 30s linear infinite`,
})

const PromoLine: FC = () => (
  <>
    <Row>
      <Divider backgroundColor='lightBlack' />
    </Row>
    <Box overflow='hidden'>
      <AnimationBox
        width='200%'
        height={32}
        justifyContent='flex-end'
        alignItems='center'
        backgroundColor='white'
      >
        {[...new Array(50)].map(() => (
          <>
            <Text
              textTransform='uppercase'
              whiteSpace='nowrap'
              fontWeight='medium'
              fontSize='small'
            >
              <FormattedMessage id='header.promo' defaultMessage='Весна-лето 2022' />
            </Text>
            <Layout flexBasis={10} flexShrink={0} />
            <Layout>
              <Box width={2} height={2} borderRadius='max' backgroundColor='primary' />
            </Layout>
            <Layout flexBasis={10} flexShrink={0} />
            <Text
              textTransform='uppercase'
              whiteSpace='nowrap'
              fontWeight='medium'
              fontSize='small'
            >
              <FormattedMessage id='header.journal_number_two' defaultMessage='Журнал №2' />
            </Text>
            <Layout flexBasis={10} flexShrink={0} />
            <Layout>
              <Box width={2} height={2} borderRadius='max' backgroundColor='primary' />
            </Layout>
            <Layout flexBasis={10} flexShrink={0} />
          </>
        ))}
      </AnimationBox>
    </Box>
    <Row>
      <Divider backgroundColor='lightBlack' />
    </Row>
  </>
)

export { PromoLine }
