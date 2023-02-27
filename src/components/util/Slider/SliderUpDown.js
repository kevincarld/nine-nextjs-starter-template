import React, { useRef, useEffect, useState } from "react";
// chakra
import { Text, Box, Image } from '@chakra-ui/react';

// swiper
import { SwiperSlide } from 'swiper/react';
import Swiper from "swiper";
import { Navigation, Autoplay, Mousewheel, Controller } from "swiper";
//
import { motion } from "framer-motion";

export default function SliderUpDown({children, prevRef, nextRef, ...rest}) {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1)
  // initialize 2 sliders
  useEffect(() => {
    // Slider 1 options (cover)
    const slider1 = new Swiper(slider1Ref.current, {
      initialSlide: 3, // change to last slide because it opposite way
      slidePerView: -1, // set to negative to move invert
      direction: 'vertical',
      speed: 1300,
      allowTouchMove: false,
      allowMouseTouch: false,
      modules: [Autoplay, Navigation, Mousewheel, Controller]
    });

    // Slider 2 options (middle box)
    const slider2 = new Swiper(slider2Ref.current, {
      direction: 'vertical',
      // allowTouchMove: false,
      // allowMouseTouch: false,
      speed: 1300,
      modules: [Autoplay, Navigation, Mousewheel, Controller],
      navigation:{
        enabled: true,
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      },
      onBeforeInit:(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      },
      on: {
        init: function(slider2) {
          // slider1.controller.control = slider2
        },
        slideChange: function(slide) {
          if(slide.previousIndex < slide.realIndex)  {
            slider1.slidePrev()
          } else {
            slider1.slideNext()
          }
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

      {/* cover */}
      <Box ref={slider1Ref} className="swiper-container slider1" h={'100vh'} overflow='hidden'>
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
        </Box>
      </Box>

      {/* middle box */}
      <Box pos='absolute' display={'flex'} flexDir='column' inset='0 0 0 0' justifyContent='center' alignItems={'center'}  h={'100vh'}>
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

          <Box mt='30px'>
            <Text pos='relative' textAlign='center' color='black' zIndex={123123}>sample control</Text>
            <Box className="arrow-holder" sx={{
              display:'flex',
              gap: '50px',
              'svg': {
                '&:hover': {
                  cursor: 'pointer'
                }
              },
            }}>
              <Box pos="relative" zIndex={100} ref={navigationPrevRef} className="slider-container btn-prev" transform={'rotate(90deg)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40.2" height="40.2" viewBox="0 0 40.2 40.2">
                  <path id="Icon_ionic-ios-arrow-dropleft-circle" data-name="Icon ionic-ios-arrow-dropleft-circle" d="M23.475,3.375a20.1,20.1,0,1,0,20.1,20.1A20.1,20.1,0,0,0,23.475,3.375Zm4.194,27.937a1.872,1.872,0,0,1,0,2.638,1.842,1.842,0,0,1-1.314.541,1.875,1.875,0,0,1-1.324-.551l-9.084-9.113a1.863,1.863,0,0,1,.058-2.57l9.219-9.248a1.865,1.865,0,1,1,2.638,2.638l-7.914,7.827Z" transform="translate(-3.375 -3.375)" fill="#c00c00" opacity="0.703"/>
                </svg>
              </Box>

              <Box pos="relative" zIndex={100} ref={navigationNextRef} className="slider-container btn-next" transform={'rotate(90deg)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40.199" height="40.2" viewBox="0 0 40.199 40.2">
                  <path id="Icon_ionic-ios-arrow-dropleft-circle" data-name="Icon ionic-ios-arrow-dropleft-circle" d="M23.475,3.375a20.1,20.1,0,1,1-20.1,20.1A20.1,20.1,0,0,1,23.475,3.375ZM19.281,31.312a1.872,1.872,0,0,0,0,2.638,1.842,1.842,0,0,0,1.314.541,1.875,1.875,0,0,0,1.324-.551L31,24.828a1.863,1.863,0,0,0-.058-2.57l-9.219-9.248a1.865,1.865,0,0,0-2.638,2.638L27,23.475Z" transform="translate(-3.375 -3.375)" fill="#c00c00" opacity="0.703"/>
                </svg>
              </Box>
            </Box>
          </Box>
      </Box>

      {/* pagination */}
      <Box pos='absolute' display={'flex'} inset='0 0 0 0' justifyContent='flex-end' alignItems={'flex-end'}>
        <Box pos='relative' fontSize='50px' bg='black' color='white' mx='40px' my='40px' zIndex={123}>
          <motion.span >0{activeSlide}</motion.span> / 03
        </Box>
      </Box>

    </Box>
  )
}
