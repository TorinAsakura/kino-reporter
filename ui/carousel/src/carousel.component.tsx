import { Swiper }        from '@atls-ui-parts/swiper'

import React             from 'react'
import { FC }            from 'react'
import { FreeMode }      from 'swiper'
import { Keyboard }      from 'swiper'

import { CarouselProps } from './carousel.interface'

const Carousel: FC<CarouselProps> = ({
  breakpoints,
  centeredSlides = false,
  freeMode = false,
  children,
}) => (
  <Swiper
    centeredSlides={centeredSlides}
    freeMode={freeMode}
    keyboard={{
      enabled: true,
    }}
    modules={[FreeMode, Keyboard]}
    breakpoints={breakpoints}
  >
    {children}
  </Swiper>
)

export { Carousel }
