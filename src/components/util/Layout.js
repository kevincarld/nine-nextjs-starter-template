import React from 'react';
//chakra
import { ChakraProvider } from '@chakra-ui/react'
//
import customTheme from 'theme';
import GlobalCss from 'theme/components/GlobalCss';
import { ParallaxProvider } from 'react-scroll-parallax'
import { ScrollerMotion } from 'scroller-motion'
import { useMediaQuery } from '@chakra-ui/react';
import { LocomotiveProvider } from './Locomotive/LocomotiveProvider';
import GuideLines from './GuideLines';
import MastheadProvider from './MastheadProvider';

export default function Layout({children}) {

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalCss />
      <GuideLines />

      <DefaultLayout>
        {children}
      </DefaultLayout>
    </ChakraProvider>

  )
}

// CHOOSE YOUR LAYOUT BELOW: (if using default or motion, add mastheadprovider in _app.js)
const DefaultLayout = ({ children }) => {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  )
}

const LocomotiveLayout = ({ children }) => {
  // NOTE: make sure you add <footer></footer> inside body to fix locomotive scroll bug

  const containerRef = React.useRef(null)
  const locomotiveOptions = {
    smooth: true,
    inertia: 0.75,
    mobile: {
      breakpoint: 0,
      getDirection: true, // <---- Fixes The Issue
      smooth: true,
    },
    tablet: {
      breakpoint: 0, // <---- Fixes The Issue
      getDirection: true, // <---- Fixes The Issue
      smooth: true,
    },
  }
  return (
    <LocomotiveProvider
      containerRef={containerRef}
      options={locomotiveOptions}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
    >
        <MastheadProvider>
          <div data-scroll-container id='hero' ref={containerRef}>
            {children}
          </div>
        </MastheadProvider>
    </LocomotiveProvider>

  )
}

const MotionLayout = ({ children }) => {
  const [isDesktop] = useMediaQuery(`(min-width: 1280px)`)

  return (
    <ParallaxProvider>
      <ScrollerMotion disabled={!isDesktop}>
        {children}
      </ScrollerMotion>
    </ParallaxProvider>
  )
}