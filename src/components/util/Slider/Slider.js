import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
//
import { useResponsive } from 'utils/common';
import { Image } from '@chakra-ui/react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
//
import { mock } from 'utils/common';

export default function Slider({children, prevRef, nextRef, ...rest}) {
  const isDesktop = useResponsive('up', 'd')
  const isTablet = useResponsive('up', 'lg')

  return (
      <Box
        {...rest}
        as={Swiper}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isTablet && !isDesktop ? 2 : isDesktop ? 3 : 1}
        loop={true}
        spaceBetween={20}

        speed={1000}
        autoplay={{
          delay: 2500
        }}

        modules={[Autoplay, Navigation]}
        className="mySwiper"
        {...(prevRef && nextRef && {
          navigation: {
            enabled: true,
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }
         })}
        {...(prevRef && nextRef && {
          onBeforeInit: (swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
         })}
      >
        {[1,2,3,4,5].map(x => (
          <SwiperSlide className='swiper-slide' key={x}>
            <Image fit='cover' w='full' src={mock('300x500', x.toString(), 'red')} />
          </SwiperSlide>
        ))}
      </Box>
  )
}
