import { SwiperOptions } from 'swiper'

interface Breakpoints {
  [width: number]: SwiperOptions
  [ratio: string]: SwiperOptions
}

export interface CarouselProps {
  children: any
  freeMode?: boolean
  centeredSlides?: boolean
  breakpoints: Breakpoints
}
