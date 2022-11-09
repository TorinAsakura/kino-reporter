import React           from 'react'
import { FC }          from 'react'

import { BoxGradient } from '@ui/background'
import { ImageBlock }  from '@ui/image'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Text }        from '@ui/text'

const ImageCard: FC = ({ minWidth, maxWidth, height, imageUrl, altText, title, indent }) => (
  <Box
    minWidth={minWidth}
    maxWidth={maxWidth}
    height={height}
    backgroundColor='gray'
    borderRadius='intermediate'
    overflow='hidden'
    zIndex={10}
    position='relative'
  >
    <Box
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      zIndex='-1'
      position='absolute'
      display='flex'
    >
      <ImageBlock src={imageUrl} alt={altText} />
    </Box>
    <Layout flexBasis={indent} />
    <Column>
      <Layout flexBasis={indent} />
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
)

export { ImageCard }
