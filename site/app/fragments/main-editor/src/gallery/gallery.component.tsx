import styled         from '@emotion/styled'
import { keyframes }  from '@emotion/react'

import React          from 'react'
import { FC }         from 'react'

import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Repeater }   from '@ui/utils'

const infinityGalleryY = keyframes`
   0%   { transform: translateY(0) }
 100% { transform: translateY(100%) }
`

const infinityGalleryX = keyframes`
   0%   { transform: translateX(0) }
 100% { transform: translate(-50%) }
`

const AnimationYBox = styled(Box)(({ duration }) => ({
  animation: `${infinityGalleryY} ${duration}s linear infinite`,
}))

const AnimationXBox = styled(Box)(({ duration }) => ({
  animation: `${infinityGalleryX} ${duration}s linear infinite`,
}))

const Gallery: FC = () => (
  <Box
    justifyContent='flex-end'
    flexDirection={['column', 'column', 'row']}
    width={['100%', '100%', 376]}
    height={[180, 180, 360]}
    overflow='hidden'
  >
    <AnimationYBox
      duration={10}
      display={['none', 'none', 'flex']}
      flexDirection='column'
      height='200%'
      width='auto'
      justifyContent='flex-end'
      alignItems='center'
    >
      <Repeater quantity={20}>
        {() => (
          <>
            <Box width={120} height={80}>
              <ImageBlock src='images/grammy.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box width={120} height={80}>
              <ImageBlock width={120} height={80} src='images/actor_year.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box width={120} height={80}>
              <ImageBlock src='images/event_year.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
          </>
        )}
      </Repeater>
    </AnimationYBox>
    <Layout flexBasis={[0, 0, 20]} flexShrink={0} />
    <AnimationYBox
      duration={20}
      display={['none', 'none', 'flex']}
      flexDirection='column'
      height='200%'
      width='auto'
      justifyContent='flex-end'
      alignItems='center'
    >
      <Repeater quantity={20}>
        {() => (
          <>
            <Box width={120} height={80}>
              <ImageBlock src='images/grammy.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box width={120} height={80}>
              <ImageBlock width={120} height={80} src='images/actor_year.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box width={120} height={80}>
              <ImageBlock src='images/event_year.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
          </>
        )}
      </Repeater>
    </AnimationYBox>
    <AnimationXBox
      duration={10}
      display={['flex', 'flex', 'none']}
      flexDirection='row'
      height={180}
      width='200%'
      justifyContent='flex-end'
      alignItems='center'
    >
      <Repeater quantity={30}>
        {() => (
          <>
            <Box minWidth={120} height={80}>
              <ImageBlock src='images/grammy.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box minWidth={120} height={80}>
              <ImageBlock width={120} height={80} src='images/actor_year.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box minWidth={120} height={80}>
              <ImageBlock src='images/event_year.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
          </>
        )}
      </Repeater>
    </AnimationXBox>
    <Layout flexBasis={[12, 12, 0]} flexShrink={0} />
    <AnimationXBox
      display={['flex', 'flex', 'none']}
      duration={15}
      flexDirection='row'
      height={180}
      width='200%'
      justifyContent='flex-end'
      alignItems='center'
    >
      <Repeater quantity={30}>
        {() => (
          <>
            <Box minWidth={120} height={80}>
              <ImageBlock src='images/grammy.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box minWidth={120} height={80}>
              <ImageBlock width={120} height={80} src='images/actor_year.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Box minWidth={120} height={80}>
              <ImageBlock src='images/event_year.png' />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
          </>
        )}
      </Repeater>
    </AnimationXBox>
  </Box>
)

export { Gallery }
