import React             from 'react'
import { FC }            from 'react'

import { ImageBlock }    from '@ui/image'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { NextLink }      from '@ui/link'
import { Text }          from '@ui/text'
import { formattedDate } from '@shared/utils'

import { CardProps }     from './card.interface'

const Card: FC<CardProps> = ({ title, genre, creationDate, imageUrl, altText, rating }) => (
  <NextLink variant='secondary' path='/'>
    <Column width={194}>
      <Box
        width={194}
        height={248}
        backgroundColor='gray'
        borderRadius='default'
        overflow='hidden'
        zIndex={10}
        position='relative'
        border='lightPrimary'
      >
        <Box width={194} height={248} zIndex='-1' position='absolute' display='flex'>
          <ImageBlock src={imageUrl} alt={altText} />
        </Box>
        <Layout flexBasis={12} />
        <Column>
          <Layout flexBasis={12} />
          <Box
            alignItems='center'
            justifyContent='center'
            width={36}
            height={36}
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
              {rating.toString().length === 1 ? `${rating}.0` : rating}
            </Text>
          </Box>
        </Column>
      </Box>
      <Layout flexBasis={12} />
      <Row>
        <Text>{title}</Text>
      </Row>
      <Layout flexBasis={4} />
      <Row alignItems='center'>
        <Layout alignItems='center'>
          <Text color='text.secondary' fontSize='small' lineHeight='compact'>
            {genre}
          </Text>
        </Layout>
        <Layout flexBasis={5} />
        <Box width={2} height={2} borderRadius='max' backgroundColor='secondary' />
        <Layout flexBasis={5} />
        <Layout alignItems='center'>
          <Text color='text.secondary' fontSize='small' lineHeight='compact'>
            {formattedDate('onlyYear', creationDate)}
          </Text>
        </Layout>
      </Row>
    </Column>
  </NextLink>
)

export { Card }
