import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
//
import Img from '../Img';
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
          <Img dimension="892x540" fit='cover' h='full' w='full'  mock='slider-1' />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide' >
          <Img dimension="892x540" fit='cover' h='full' w='full' mock='slider-2'  />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide' >
          <Img dimension="892x540" fit='cover' h='full' w='full' mock='slider-3' />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide' >
          <Img dimension="892x540" fit='cover' h='full' w='full' mock='slider-4'  />
        </SwiperSlide>

        <SwiperSlide className='swiper-slide' >
          <Img dimension="892x540" fit='cover' h='full' w='full' mock='slider-5' />
        </SwiperSlide>
      </Box>
    </Box>
  )
}
