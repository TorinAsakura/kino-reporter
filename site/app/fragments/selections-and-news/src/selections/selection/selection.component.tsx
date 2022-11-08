import React              from 'react'
import { FC }             from 'react'

import { BoxGradient }    from '@ui/background'
import { Condition }      from '@ui/condition'
import { ImageBlock }     from '@ui/image'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { NextLink }       from '@ui/link'
import { Text }           from '@ui/text'
import { TextEllipsis }   from '@ui/text'
import { formattedDate }  from '@shared/utils'

import { MainPreview }    from '../main-preview'
import { SelectionProps } from './selection.interface'

const Selection: FC<SelectionProps> = ({
  index,
  title,
  date,
  description,
  imageUrl,
  altText,
}) => (
  <>
    <Row width={index === 0 ? '100%' : 260}>
      <Condition match={index === 0}>
        <Column fill>
          <MainPreview
            imageUrl={imageUrl}
            altText={altText}
            title={title}
            description={description}
            date={date}
          />
          <Layout flexBasis={32} />
        </Column>
      </Condition>
      <Condition match={index !== 0}>
        <NextLink variant='secondary' path='/'>
          <Column fill>
            <Row>
              <Box
                minWidth={[120, 120, 260]}
                maxWidth={[120, 120, 260]}
                height={[100, 100, 180]}
                backgroundColor='gray'
                borderRadius='intermediate'
                overflow='hidden'
                zIndex={10}
                position='relative'
              >
                <Box
                  minWidth={260}
                  maxWidth={260}
                  height={180}
                  zIndex='-1'
                  position='absolute'
                  display={['none', 'none', 'flex']}
                >
                  <ImageBlock src={imageUrl} alt={altText} />
                </Box>
                <Box
                  minWidth={120}
                  maxWidth={120}
                  height={100}
                  zIndex='-1'
                  position='absolute'
                  display={['flex', 'flex', 'none']}
                >
                  <ImageBlock src={imageUrl} alt={altText} />
                </Box>
                <Layout flexBasis={12} />
                <Column>
                  <Layout flexBasis={12} />
                  <BoxGradient
                    alignItems='center'
                    p={['6px 8px', '6px 8px', '8px 10px']}
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
                </Column>
              </Box>
            </Row>
            <Layout flexBasis={16} />
            <Row maxWidth={252} height={57} overflow='hidden'>
              <TextEllipsis
                lineClamp={3}
                fontFamily='lora'
                whiteSpace='normal'
                fontSize={['default', 'default', 'semiRegular']}
                lineHeight='extra'
              >
                {description}
              </TextEllipsis>
            </Row>
            <Layout flexBasis={12} />
            <Row>
              <Text
                fontSize={['atomic', 'atomic', 'small']}
                lineHeight='compact'
                color='text.secondary'
              >
                {formattedDate('fullDate', date)}
              </Text>
            </Row>
          </Column>
        </NextLink>
      </Condition>
    </Row>
    <Condition match={index !== 0}>
      <Layout flexBasis={[0, 0, 32]} />
    </Condition>
  </>
)

export { Selection }
