import React from 'react'
// chakra
import { Text, Box } from '@chakra-ui/react'
//
import { useResponsive } from 'utils/common';
import { Image } from '@chakra-ui/react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Mousewheel } from "swiper";
//
import { mock } from 'utils/common';

export default function Slider({children, prevRef, nextRef, ...rest}) {
  const isDesktop = useResponsive('up', 'd')
  const isTablet = useResponsive('up', 'lg')
  return (
    <Box pos='relative'  className='swiper-container'>
      <Box
        {...rest}
        as={Swiper}
        loop={true}
        direction='vertical'
        speed={1300}
        mousewheel={{
          forceToAxis: true,
        }}
        {...typeof window !== 'undefined' && {
          h: window.innerHeight
        }}
        modules={[Autoplay, Navigation, Mousewheel]}
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
      {/* Slider end */}



      <Box className='tae' pos='absolute' display={'flex'} inset='0 0 0 0' justifyContent='center' alignItems={'center'}  h={'100vh'}>
        <Box pos={'relative'} w='500px' height='600px' zIndex={123} overflow='hidden'>
          <Box
          {...rest}
          as={Swiper}
          loop={true}
          direction='vertical'
          speed={1300}
          mousewheel={{
            forceToAxis: true,
            invert: true,
          }}
          {...typeof window !== 'undefined' && {
            h: '600px'
          }}
          modules={[Autoplay, Navigation, Mousewheel]}
          className="mySwiper"
          sx={{
            '& .swiper-slide': {
              // height: '600px!important',
            }
          }}
        >
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
    </Box>
  )
}
