import styled          from '@emotion/styled'
import { keyframes }   from '@emotion/react'

import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { BoxGradient } from '@ui/background'
import { Condition }   from '@ui/condition'
import { ImageBlock }  from '@ui/image'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Repeater }    from '@ui/utils'

const infinityGalleryY = keyframes`
   0%   { transform: translateY(-50%) }
 100% { transform: translateY(0) }
`

const infinityGalleryX = keyframes`
   0%   { transform: translateX(0) }
 100% { transform: translate(-50%) }
`

const AnimationYBox = styled(Box)(({ duration }: { duration: number }) => ({
  animation: `${infinityGalleryY} ${duration}s linear infinite`,
}))

const AnimationXBox = styled(Box)(({ duration }: { duration: number }) => ({
  animation: `${infinityGalleryX} ${duration}s linear infinite`,
}))

const Gallery: FC = () => {
  const [images] = useState<string[]>([
    'images/speech.png',
    'images/actor_year.png',
    'images/event_year.png',
    'images/editor.png',
  ])

  return (
    <Box
      justifyContent='flex-end'
      flexDirection={['column', 'column', 'row']}
      width={['100%', '100%', 376]}
      height={[180, 180, 360]}
      overflow='hidden'
      position='relative'
    >
      <BoxGradient
        display={['none', 'none', 'flex']}
        width='100%'
        height='100%'
        position='absolute'
        zIndex='10'
        gradient='purple'
      />
      <Repeater quantity={2}>
        {(item, index) => (
          <>
            <Box
              height='300%'
              justifyContent='space-around'
              overflow='hidden'
              flexDirection='column'
            >
              <AnimationYBox
                duration={index === 0 ? 5 : 10}
                display={['none', 'none', 'flex']}
                flexDirection='column'
                height='300%'
                width='auto'
                justifyContent='space-around'
                alignItems='center'
              >
                <Box justifyContent='space-around' height='100%' flexDirection='column'>
                  <Repeater items={images}>
                    {(src) => (
                      <>
                        <Box borderRadius='intermediate' overflow='hidden' width={180} height={120}>
                          <ImageBlock src={src} />
                        </Box>
                        <Layout flexBasis={10} flexShrink={0} />
                      </>
                    )}
                  </Repeater>
                </Box>
                <Box justifyContent='space-around' height='100%' flexDirection='column'>
                  <Repeater items={images}>
                    {(src2) => (
                      <>
                        <Box borderRadius='intermediate' overflow='hidden' width={180} height={120}>
                          <ImageBlock src={src2} />
                        </Box>
                        <Layout flexBasis={10} flexShrink={0} />
                      </>
                    )}
                  </Repeater>
                </Box>
              </AnimationYBox>
            </Box>
            <Condition match={index === 0}>
              <Layout flexBasis={[0, 0, 20]} flexShrink={0} />
            </Condition>
          </>
        )}
      </Repeater>
      <Repeater quantity={2}>
        {(item, index) => (
          <>
            <AnimationXBox
              duration={index === 0 ? 10 : 15}
              display={['flex', 'flex', 'none']}
              flexDirection='row'
              height={180}
              width={['150%', '100%', '80%']}
              justifyContent='space-around'
              alignItems='center'
            >
              <Box justifyContent='space-around' width={['100%', '50%', '80%']} flexDirection='row'>
                <Repeater items={images}>
                  {(src) => (
                    <>
                      <Box borderRadius='intermediate' overflow='hidden' width={120} height={80}>
                        <ImageBlock src={src} />
                      </Box>
                      <Layout flexBasis={10} flexShrink={0} />
                    </>
                  )}
                </Repeater>
              </Box>
              <Box justifyContent='space-around' width={['100%', '50%', '80%']} flexDirection='row'>
                <Repeater items={images}>
                  {(src2) => (
                    <>
                      <Box borderRadius='intermediate' overflow='hidden' width={120} height={80}>
                        <ImageBlock src={src2} />
                      </Box>
                      <Layout flexBasis={10} flexShrink={0} />
                    </>
                  )}
                </Repeater>
              </Box>
            </AnimationXBox>
            <Condition match={index === 0}>
              <Layout flexBasis={[12, 12, 0]} flexShrink={0} />
            </Condition>
          </>
        )}
      </Repeater>
    </Box>
  )
}
export { Gallery }
