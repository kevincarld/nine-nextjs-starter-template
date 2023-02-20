import React, { useRef, useEffect, useState } from "react";
// chakra
import { Text, Box } from '@chakra-ui/react'
//
import { useResponsive } from 'utils/common';
import { Image } from '@chakra-ui/react';
// swiper
import { SwiperSlide } from 'swiper/react';
import Swiper from "swiper";
import { Navigation, Autoplay, Mousewheel, Controller } from "swiper";
//
import { motion } from "framer-motion";

export default function Slider({children, prevRef, nextRef, ...rest}) {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1)

  // initialize 2 sliders
  useEffect(() => {
    // Slider 1 options
    const slider1 = new Swiper(slider1Ref.current, {
      direction: 'vertical',
      speed: 1300,
      mousewheel: {
        forceToAxis: true,
      },
      controller: {
        control: null
      },
      modules: [Autoplay, Navigation, Mousewheel, Controller]
    });

    // Slider 2 options
    const slider2 = new Swiper(slider2Ref.current, {
      direction: 'vertical',
      speed: 1300,
      mousewheel: {
        forceToAxis: true,
        invert: true,
      },
      controller: {
        control: slider1
      },
      modules: [Autoplay, Navigation, Mousewheel, Controller],
      on: {
        init: function(slider2) {
          slider1.controller.control = slider2
        },
        slideChange: function(slide) {
          setActiveSlide(parseInt(slide.activeIndex) + 1)
        }
      }
    });

    return () => {
      slider1.destroy();
      slider2.destroy();
    };
  }, [])

  return (
    <Box pos='relative' >

      <Box ref={slider1Ref} className="swiper-container slider1" h={'100vh'} overflow='hidden'>
        <Box className="swiper-wrapper">
          <SwiperSlide className='swiper-slide' >
            <Image fit='cover' w='full' src={'https://loremflickr.com/640/360'} />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide' >
            <Image fit='cover' w='full' src={'https://loremflickr.com/620/360'} />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide' >
            <Image fit='cover' w='full' src={'https://loremflickr.com/630/360'} />
          </SwiperSlide>
        </Box>
      </Box>
      {/* Slider end */}

      <Box pos='absolute' display={'flex'} inset='0 0 0 0' justifyContent='center' alignItems={'center'}  h={'100vh'}>
        <Box ref={slider2Ref} className="swiper-container slider2" w='500px' height='600px' overflow='hidden'>
          <Box className="swiper-wrapper">
            <SwiperSlide className='swiper-slide' >
            <Image fit='cover' w='full' height='600px' src={'https://placebear.com/640/360'} />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide' >
            <Image fit='cover' w='full' height='600px' src={'https://placebear.com/620/360'} />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide' >
            <Image fit='cover' w='full' height='600px' src={'https://placebear.com/630/360'} />
            </SwiperSlide>
          </Box>
        </Box>
      </Box>

      <Box pos='absolute' display={'flex'} inset='0 0 0 0' justifyContent='flex-end' alignItems={'flex-end'}>
        <Box pos='relative' fontSize='50px' bg='black' color='white' mx='40px' my='40px' zIndex={123}>
          <motion.span >0{activeSlide}</motion.span> / 03
        </Box>
      </Box>

    </Box>
  )
}
