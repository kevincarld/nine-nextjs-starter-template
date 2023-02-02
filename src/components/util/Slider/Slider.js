import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
//
import { useResponsive } from 'utils/common';
// swiper
import { Swiper } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";

export default function Slider({prevRef, nextRef, children, ...rest}) {
  const isDesktop = useResponsive('up', 'desktop')
  const isTablet = useResponsive('up', 'tablet')

  return (
      <Box
        {...rest}
        as={Swiper}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isTablet && !isDesktop ? 2 : isDesktop ? 3 : 1}
        loop={true}
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
        {children}
      </Box>
  )
}
