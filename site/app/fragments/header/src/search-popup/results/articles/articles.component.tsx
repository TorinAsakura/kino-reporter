import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { TextEllipsis }     from '@ui/text'

import { ArticlesProps }    from './articles.interface'

const Articles: FC<ArticlesProps> = ({ filteredArticles }) => (
  <Column height='auto'>
    <Row>
      <Text textTransform='uppercase' fontWeight='medium' color='text.tertiary' fontSize='atomic'>
        <FormattedMessage id='header.articles' defaultMessage='Статьи' />
      </Text>
    </Row>
    <Layout flexBasis={24} />
    {filteredArticles.slice(0, 3).map(({
      id,
      title,
      description,
      image: { imageUrl, altText },
    }) => (
      <Column key={id}>
        <Row>
          <Box
            minWidth={72}
            maxWidth={72}
            height={60}
            backgroundColor='gray'
            borderRadius='intermediate'
            overflow='hidden'
          >
            <ImageBlock src={imageUrl} alt={altText} width={72} height={60} />
          </Box>
          <Layout flexBasis={16} flexShrink={0} />
          <Column height='auto'>
            <Layout flexBasis={2} />
            <Row>
              <Text
                textTransform='uppercase'
                fontSize='micro'
                fontWeight='semiBold'
                color='text.accent'
              >
                {title}
              </Text>
            </Row>
            <Layout flexBasis={8} />
            <Row height={38} overflow='hidden'>
              <TextEllipsis lineClamp={2} fontSize='default' lineHeight='extra'>
                {description}
              </TextEllipsis>
            </Row>
          </Column>
        </Row>
        <Layout flexBasis={24} />
      </Column>
    ))}
  </Column>
)

export { Articles }
