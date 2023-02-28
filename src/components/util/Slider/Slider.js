import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
//
import { Image } from '@chakra-ui/react';
// swiper
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
//
import { mock } from 'utils/common';

export default function Slider({children, prevRef, nextRef, ...rest}) {
  const slider1Ref = React.useRef(null);

    // initialize sliders
    React.useEffect(() => {
      // Slider 1 options (cover)
      const slider1 = new Swiper(slider1Ref.current, {
        slidesPerView: 3, // set to negative to move invert
        speed: 1300,
        spaceBetween: 20,
        modules: [Autoplay, Navigation]
      });

      return () => {
        slider1.destroy();
      };
    }, [])

  return (
    <Box ref={slider1Ref} className="swiper-container slider1"  overflow='hidden'>
      <Box className="swiper-wrapper">
        <SwiperSlide className='swiper-slide' >
          <Image fit='cover' h='full' w='full' src={'http://placekitten.com/640/360'} />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide' >
          <Image fit='cover' h='full' w='full' src={'http://placekitten.com/630/360'} />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide' >
          <Image fit='cover' h='full' w='full' src={'http://placekitten.com/620/360'} />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide' >
          <Image fit='cover' h='full' w='full' src={'http://placekitten.com/620/360'} />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide' >
          <Image fit='cover' h='full' w='full' src={'http://placekitten.com/620/360'} />
        </SwiperSlide>
      </Box>
    </Box>
  )
}
