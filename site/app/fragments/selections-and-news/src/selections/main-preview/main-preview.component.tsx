import React             from 'react'
import { FC }            from 'react'

import { BoxGradient }   from '@ui/background'
import { ImageBlock }    from '@ui/image'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Text }          from '@ui/text'
import { TextEllipsis }  from '@ui/text'
import { formattedDate } from '@shared/utils'
import { useHover }      from '@ui/utils'

const MainPreview: FC = ({ imageUrl, altText, title, description, date }) => {
  const [hover, hoverProps] = useHover()

  return (
    <BoxGradient
      width='100%'
      height={[220, 220, 363]}
      borderRadius={['intermediate', 'intermediate', 'medium']}
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
          src={imageUrl}
          alt={altText}
        />
      </BoxGradient>
      <Layout flexBasis={[12, 12, 24]} flexShrink={0} />
      <Column fill>
        <Layout flexBasis={[12, 12, 24]} />
        <Layout>
          <BoxGradient
            alignItems='center'
            p={['6px 8px', '6px 8px', '10px 8px']}
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
              {title}
            </Text>
          </BoxGradient>
        </Layout>
        <Layout flexGrow={1} />
        <Row overflow='hidden'>
          <TextEllipsis
            lineClamp={3}
            color='text.white'
            fontFamily='lora'
            fontWeight='medium'
            fontSize={['xl', 'xl', 'big']}
            lineHeight='compact'
            textShadow='semiBlack'
          >
            {description}
          </TextEllipsis>
        </Row>
        <Layout flexBasis={[8, 8, 16]} />
        <Row>
          <Text fontSize='small' lineHeight='compact' color='text.inverseSecondary'>
            {formattedDate('fullDate', date as Date)}
          </Text>
        </Row>
        <Layout flexBasis={[12, 12, 24]} />
      </Column>
      <Layout flexBasis={[12, 12, 24]} flexShrink={0} />
    </BoxGradient>
  )
}

export { MainPreview }
