import styled          from '@emotion/styled'
import { keyframes }   from '@emotion/react'

import React           from 'react'
import { FC }          from 'react'

import { BoxGradient } from '@ui/background'
import { ImageBlock }  from '@ui/image'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Repeater }    from '@ui/utils'

const infinityGalleryX = keyframes`
   0%   { transform: translateX(-50%) }
 100% { transform: translate(0) }
`

const AnimationXBox = styled(Box)(({ duration }: { duration: number }) => ({
  animation: `${infinityGalleryX} ${duration}s linear infinite`,
}))

const Interactive: FC = () => (
  <Box
    height='100%'
    overflow='hidden'
    position='relative'
    justifyContent='center'
    alignItems='center'
  >
    <BoxGradient
      display={['none', 'none', 'flex']}
      width='100%'
      height={234}
      position='absolute'
      zIndex={15}
      gradient='purpleRow'
    />
    <Box
      position='absolute'
      zIndex={10}
      display={['none', 'none', 'flex']}
      width={300}
      height={234}
    >
      <ImageBlock width={300} height={234} src='images/clapper.png' />
    </Box>
    <Box
      position='absolute'
      zIndex={10}
      display={['flex', 'flex', 'none']}
      width={160}
      height={160}
    >
      <ImageBlock width={160} height={160} src='images/sphere.png' />
    </Box>
    <Layout display={['none', 'none', 'flex']}>
      <Repeater quantity={2}>
        {() => (
          <AnimationXBox
            duration={15}
            display='flex'
            flexDirection='row'
            overflow='hidden'
            height={77}
            minWidth={['220%', '220%', '240%']}
            justifyContent='space-around'
            alignItems='center'
          >
            <Box justifyContent='space-around' flexDirection='row'>
              <Box minWidth={[524, 524, 675]} height={[56, 56, 77]} zIndex={1}>
                <Layout display={['none', 'none', 'flex']}>
                  <ImageBlock src='images/be_aware.svg' />
                </Layout>
                <Layout display={['flex', 'flex', 'none']}>
                  <ImageBlock src='images/be_aware_mobile.svg' />
                </Layout>
              </Box>
            </Box>
            <Box justifyContent='space-around' flexDirection='row'>
              <Box minWidth={[524, 524, 675]} height={[56, 56, 77]} zIndex={1}>
                <Layout display={['none', 'none', 'flex']}>
                  <ImageBlock src='images/be_aware.svg' />
                </Layout>
                <Layout display={['flex', 'flex', 'none']}>
                  <ImageBlock src='images/be_aware_mobile.svg' />
                </Layout>
              </Box>
            </Box>
          </AnimationXBox>
        )}
      </Repeater>
    </Layout>
    <AnimationXBox
      duration={10}
      display={['flex', 'flex', 'none']}
      flexDirection='row'
      overflow='hidden'
      height={77}
      minWidth='320%'
      justifyContent='space-around'
      alignItems='center'
    >
      <Box justifyContent='space-around' flexDirection='row'>
        <Box minWidth={524} height={56} zIndex={1}>
          <ImageBlock src='images/be_aware_mobile.svg' />
        </Box>
      </Box>
      <Box justifyContent='space-around' flexDirection='row'>
        <Box minWidth={524} height={56} zIndex={1}>
          <ImageBlock src='images/be_aware_mobile.svg' />
        </Box>
      </Box>
    </AnimationXBox>
  </Box>
)

export { Interactive }
