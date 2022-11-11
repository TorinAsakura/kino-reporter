import React                    from 'react'
import { FC }                   from 'react'
import { FormattedMessage }     from 'react-intl'
import { useEffect }            from 'react'
import { useState }             from 'react'

import { MainArticle }          from '@shared/data'
import { BoxGradient }          from '@ui/background'
import { GhostButton }          from '@ui/button'
import { LongArrowRightIcon }   from '@ui/icons'
import { PinIcon }              from '@ui/icons'
import { ImageBlock }           from '@ui/image'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Text }                 from '@ui/text'
import { TextEllipsis }         from '@ui/text'
import { useMockedMainArticle } from '@shared/data'
import { formattedDate }        from '@shared/utils'
import { useHover }             from '@ui/utils'

const MainPreview: FC = () => {
  const { mainArticle: mainArticleData } = useMockedMainArticle()

  const [mainArticle, setMainArticle] = useState<MainArticle>()

  useEffect(() => {
    setMainArticle(mainArticleData)

    // eslint-disable-next-line
  }, [])

  const [hover, hoverProps] = useHover()

  return (
    <BoxGradient
      width={['100%', '100%', 843]}
      height={[320, 320, 576]}
      borderRadius={['bottomSide', 'bottomSide', 'medium']}
      zIndex={10}
      gradient={hover ? 'lightBlack' : 'black'}
      position='relative'
      overflow='hidden'
      // @ts-ignore
      cursor='pointer'
      {...hoverProps}
    >
      <BoxGradient
        opacity={hover ? 0.9 : 1}
        width='100%'
        height='100%'
        zIndex='-1'
        position='absolute'
      >
        <ImageBlock
          // @ts-ignore
          objectPosition='center'
          src={mainArticle?.image.imageUrl}
          alt={mainArticle?.image.altText}
        />
      </BoxGradient>
      <Layout flexBasis={[16, 16, 32]} flexShrink={0} />
      <Column fill>
        <Layout flexGrow={[1, 1, 0]} flexBasis={[0, 0, 32]} />
        <Layout>
          <BoxGradient
            alignItems='center'
            p={['6px 8px', '8px 6px', '10px 8px']}
            blur={2}
            gradient='white'
            borderRadius='normal'
          >
            <Text
              color='text.white'
              fontWeight='semiBold'
              fontSize={['micro', 'micro', 'atomic']}
              textTransform='uppercase'
            >
              {mainArticle?.title}
            </Text>
          </BoxGradient>
          <Layout flexBasis={8} />
          <BoxGradient p='6px' border='lightWhite' blur={2} gradient='white' borderRadius='normal'>
            <Layout display={['none', 'none', 'flex']}>
              <PinIcon color='white' width={15} height={15} />
            </Layout>
            <Layout display={['flex', 'flex', 'none']}>
              <PinIcon color='white' width={10} height={10} />
            </Layout>
          </BoxGradient>
        </Layout>
        <Layout flexBasis={[12, 12, 0]} flexGrow={[0, 0, 1]} flexShrink={0} />
        <Row overflow='hidden'>
          <TextEllipsis
            lineClamp={3}
            color='text.white'
            fontFamily='lora'
            fontSize={['xl', 'xl', 'big']}
            lineHeight='compact'
          >
            {mainArticle?.description}
          </TextEllipsis>
        </Row>
        <Layout flexBasis={[12, 12, 24]} />
        <Row>
          <GhostButton>
            <Layout width={110} alignItems='center'>
              <Layout>
                <Text
                  fontWeight='medium'
                  fontSize={['small', 'small', 'semiRegular']}
                  color='white'
                >
                  <FormattedMessage id='hero.more' defaultMessage='Подробнее' />
                </Text>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <LongArrowRightIcon color='white' width={18} height={18} />
              </Layout>
            </Layout>
          </GhostButton>
          <Layout flexGrow={1} />
          <Layout>
            <Text fontSize='small' lineHeight='compact' color='text.inverseSecondary'>
              {formattedDate('fullDate', mainArticle?.date as Date)}
            </Text>
          </Layout>
        </Row>
        <Layout flexBasis={[20, 20, 32]} />
      </Column>
      <Layout flexBasis={[16, 16, 32]} flexShrink={0} />
    </BoxGradient>
  )
}

export { MainPreview }
