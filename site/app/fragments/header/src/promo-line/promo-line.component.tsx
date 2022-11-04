import styled               from '@emotion/styled'
import { keyframes }        from '@emotion/react'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { Repeater }         from '@ui/utils'

const infinityLine = keyframes`
   0%   { transform: translateX(0) }
 100% { transform: translate(-50%) }
`

const AnimationBox = styled(Box)({
  animation: `${infinityLine} 200s linear infinite`,
})

const PromoLine: FC = () => (
  <Box position='fixed' top={[64, 64, 88]} overflow='hidden'>
    <Column>
      <Row>
        <Divider backgroundColor='lightBlack' />
      </Row>
      <Row>
        <AnimationBox
          width='200%'
          height={32}
          justifyContent='flex-end'
          alignItems='center'
          backgroundColor='white'
        >
          <Repeater
            quantity={50}
            onIteration={() => (
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
            )}
          />
        </AnimationBox>
      </Row>
      <Row>
        <Divider backgroundColor='lightBlack' />
      </Row>
    </Column>
  </Box>
)

export { PromoLine }
