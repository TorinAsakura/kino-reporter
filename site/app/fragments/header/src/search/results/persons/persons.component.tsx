import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { PersonsProps }     from './persons.interface'

const Persons: FC<PersonsProps> = ({ filteredPersons }) => (
  <Column height='auto'>
    <Row>
      <Text textTransform='uppercase' fontWeight='medium' color='text.tertiary' fontSize='atomic'>
        <FormattedMessage id='header.persons' defaultMessage='Персоны' />
      </Text>
    </Row>
    <Layout flexBasis={24} />
    {filteredPersons.slice(0, 3).map(({ id, profession, title, image: { imageUrl, altText } }) => (
      <Column key={id}>
        <NextLink variant='secondary' path='/'>
          <Column>
            <Row>
              <Box
                minWidth={45}
                maxWidth={45}
                height={54}
                backgroundColor='gray'
                borderRadius='intermediate'
                overflow='hidden'
              >
                <ImageBlock src={imageUrl} alt={altText} width={45} height={54} />
              </Box>
              <Layout flexBasis={16} flexShrink={0} />
              <Column height='auto'>
                <Layout flexBasis={5.5} />
                <Row maxWidth={249}>
                  <Text whiteSpace='normal' overflow='hidden' fontSize='semiRegular'>
                    {title}
                  </Text>
                </Row>
                <Layout flexBasis={8} />
                <Row overflow='hidden'>
                  <Text color='text.tertiary' fontSize='small' lineHeight='extra'>
                    {profession}
                  </Text>
                </Row>
              </Column>
            </Row>
          </Column>
        </NextLink>
        <Layout flexBasis={24} />
      </Column>
    ))}
  </Column>
)

export { Persons }
