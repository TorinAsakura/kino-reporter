import React           from 'react'
import { FC }          from 'react'

import { Condition }   from '@ui/condition'
import { AvatarIcon }  from '@ui/icons'
import { CameraIcon }  from '@ui/icons'
import { ImageBlock }  from '@ui/image'
import { Box }         from '@ui/layout'
import { useHover }    from '@ui/utils'

import { AvatarProps } from './avatar.interface'

const Avatar: FC<AvatarProps> = ({ imageUrl, width, height }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box
      width={width}
      height={height}
      borderRadius='max'
      position='relative'
      overflow='hidden'
      // @ts-ignore
      cursor='pointer'
      {...hoverProps}
    >
      <Box
        width='100%'
        height='100%'
        alignItems='center'
        justifyContent='center'
        position='absolute'
        borderRadius='max'
        backgroundColor={hover ? 'semiBlack' : 'transparent'}
        style={{ transition: '.3s' }}
      >
        <Condition match={hover} smoothOptions={{ duration: 0.3, pattern: 'in' }} smooth>
          <Box width='100%' height='100%' alignItems='center' justifyContent='center'>
            <CameraIcon color='inverseSecondary' width={24} height={24} />
          </Box>
        </Condition>
      </Box>
      <Condition match={!!imageUrl?.length}>
        <ImageBlock src={imageUrl} width='100%' height='100%' />
      </Condition>
      <Condition match={!imageUrl?.length}>
        <AvatarIcon width='100%' height='100%' />
      </Condition>
    </Box>
  )
}

export { Avatar }
