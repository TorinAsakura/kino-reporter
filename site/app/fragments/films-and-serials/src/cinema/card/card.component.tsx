import React               from 'react'
import { FC }              from 'react'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { NextLink }        from '@ui/link'
import { Text }            from '@ui/text'
import { TextEllipsis }    from '@ui/text'
import { formattedDate }   from '@shared/utils'
import { formattedRating } from '@shared/utils'

import { MotionBox }       from '../../styles'
import { CardProps }       from './card.interface'

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.35,
      x: { stiffness: 1000, velocity: 90 },
    },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: {
      type: 'spring',
      x: { stiffness: 100 },
    },
  },
}

const Card: FC<CardProps> = ({ title, genre, creationDate, imageUrl, altText, rating }) => (
  <MotionBox variants={variants}>
    <NextLink variant='secondary' path='/'>
      <Column width={[120, 120, 194]}>
        <Box
          width={[120, 120, 194]}
          height={[148, 148, 248]}
          backgroundColor='gray'
          borderRadius='default'
          overflow='hidden'
          zIndex={10}
          position='relative'
          border='lightPrimary'
        >
          <Box
            width={[120, 120, 194]}
            height={[148, 148, 248]}
            zIndex='-1'
            position='absolute'
            display='flex'
          >
            <ImageBlock src={imageUrl} alt={altText} />
          </Box>
          <Layout flexBasis={[8, 8, 12]} />
          <Column>
            <Layout flexBasis={[8, 8, 12]} />
            <Box
              alignItems='center'
              justifyContent='center'
              width={[28, 28, 36]}
              height={[28, 28, 36]}
              backgroundColor='white'
              borderRadius='normal'
              boxShadow='grey16'
            >
              <Text
                color='text.primary'
                fontWeight='medium'
                fontSize={['micro', 'micro', 'small']}
                textTransform='uppercase'
              >
                {formattedRating(rating)}
              </Text>
            </Box>
          </Column>
        </Box>
        <Layout flexBasis={[8, 8, 12]} />
        <Row height={18} width={193} overflow='hidden'>
          <TextEllipsis
            lineClamp={1}
            fontWeight='medium'
            fontSize={['small', 'small', 'default']}
            lineHeight={['compact', 'compact', 'extra']}
          >
            {title}
          </TextEllipsis>
        </Row>
        <Layout flexBasis={4} />
        <Row alignItems='center'>
          <Layout alignItems='center'>
            <Text
              color='text.secondary'
              fontSize={['atomic', 'atomic', 'small']}
              lineHeight='compact'
            >
              {genre}
            </Text>
          </Layout>
          <Layout flexBasis={5} />
          <Box width={2} height={2} borderRadius='max' backgroundColor='secondary' />
          <Layout flexBasis={5} />
          <Layout alignItems='center'>
            <Text
              color='text.secondary'
              fontSize={['atomic', 'atomic', 'small']}
              lineHeight='compact'
            >
              {formattedDate('onlyYear', creationDate)}
            </Text>
          </Layout>
        </Row>
      </Column>
    </NextLink>
  </MotionBox>
)

export { Card }
