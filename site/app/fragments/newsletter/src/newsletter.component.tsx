import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Input }            from '@ui/input'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Comma }            from '@ui/text'
import { Text }             from '@ui/text'

import { Interactive }      from './interactive'

const Newsletter: FC = () => {
  const intl = useIntl()

  const [value, setValue] = useState<string>('')
  const [submitValid, setSubmitValid] = useState<boolean>(false)

  const description = intl.formatMessage({ id: 'newsletter.description' })
  const firstPart = description.slice(0, 39)
  const news = description.slice(40, 48)
  const events = description.slice(50, 57)
  const and = description.slice(58, 59)
  const materials = description.slice(60, 70)
  const weekly = description.slice(71)

  return (
    <Box width='100%' justifyContent='center' backgroundColor='background.lightGray'>
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
      <Column fill maxWidth={1280} height='100%' overflow='hidden'>
        <Layout flexBasis={[32, 32, 64]} />
        <Box
          width='100%'
          justifyContent='center'
          backgroundColor='background.dark'
          borderRadius={['medium', 'medium', 'voluminous']}
          flexDirection={['column-reverse', 'column-reverse', 'row']}
        >
          <Layout flexBasis={[0, 0, 48]} flexShrink={0} />
          <Column fill maxWidth={['100%', '100%', 592]} justifyContent='center'>
            <Layout flexBasis={[24, 24, 48]} />
            <Row width='100%' justifyContent='center' maxWidth={['100%', '100%', 496]}>
              <Layout flexBasis={[24, 24, 0]} flexShrink={0} />
              <Layout>
                <Text display='inline' fontSize={['semiLarge', 'semiLarge', 'large']}>
                  <Text
                    fontWeight='medium'
                    lineHeight='extra'
                    fontFamily='lora'
                    display='inline'
                    color='text.white'
                  >
                    {firstPart}
                  </Text>
                  <Space />
                  <Text
                    fontWeight='medium'
                    lineHeight='extra'
                    fontFamily='lora'
                    color='text.accent'
                  >
                    {news}
                  </Text>
                  <Text fontWeight='medium' lineHeight='extra' fontFamily='lora' color='text.white'>
                    <Comma />
                  </Text>
                  <Space />
                  <Text
                    fontWeight='medium'
                    lineHeight='extra'
                    fontFamily='lora'
                    color='text.accent'
                  >
                    {events}
                  </Text>
                  <Space />
                  <Text fontWeight='medium' lineHeight='extra' fontFamily='lora' color='text.white'>
                    {and}
                  </Text>
                  <Space />
                  <Text
                    fontWeight='medium'
                    lineHeight='extra'
                    fontFamily='lora'
                    color='text.accent'
                  >
                    {materials}
                  </Text>
                  <Space />
                  <Text fontWeight='medium' lineHeight='extra' fontFamily='lora' color='text.white'>
                    {weekly}
                  </Text>
                </Text>
              </Layout>
              <Layout flexBasis={[24, 24, 0]} flexShrink={0} />
            </Row>
            <Layout flexBasis={[20, 20, 32]} />
            <Layout width='100%' maxWidth={['100%', '100%', 496]}>
              <Layout flexBasis={[24, 24, 0]} flexShrink={0} />
              <Input
                value={value}
                onChange={setValue}
                isMessageSent={submitValid}
                setIsMessageSent={setSubmitValid}
                variant='secondary'
                size='semiNormal'
                type='newsletter'
                placeholder={intl.formatMessage({ id: 'newsletter.enter_email' })}
              />
              <Layout flexBasis={[24, 24, 0]} flexShrink={0} />
            </Layout>
            <Layout flexBasis={[20, 20, 32]} />
            <Row>
              <Layout flexBasis={[24, 24, 0]} flexShrink={0} />
              <Text color='text.inverseTertiary' fontSize='atomic' lineHeight='compact'>
                <FormattedMessage id='newsletter.mailing_list' />
              </Text>
            </Row>
            <Layout flexBasis={[24, 24, 48]} />
          </Column>
          <Column fill maxWidth={['100%', '100%', 640]} overflow='hidden'>
            <Layout flexBasis={[24, 24, 0]} />
            <Box height={[180, 180, 329]} alignItems='center' justifyContent='center'>
              <Interactive />
            </Box>
          </Column>
        </Box>
        <Layout flexBasis={[24, 24, 64]} />
      </Column>
      <Layout flexBasis={[16, 16, 80]} flexShrink={0} />
    </Box>
  )
}

export { Newsletter }
