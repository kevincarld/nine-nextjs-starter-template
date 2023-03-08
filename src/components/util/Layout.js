import React from 'react';
//chakra
import { ChakraProvider } from '@chakra-ui/react'
//
import customTheme from 'theme';
import GlobalCss from 'theme/components/GlobalCss';
import MastheadProvider from './MastheadProvider';
import { ParallaxProvider } from 'react-scroll-parallax'
import { ScrollerMotion } from 'scroller-motion'
import { useMediaQuery } from '@chakra-ui/react';
import { LocomotiveProvider } from './Locomotive/LocomotiveProvider';
import GuideLines from './GuideLines';

export default function Layout({children}) {
  const [isDesktop] = useMediaQuery(`(min-width: 1280px)`)

  const scrollEffect = process.env.scrollEffect

  const containerRef = React.useRef(null)
  const locomotiveOptions = {
    smooth: true,
    inertia: 0.75,
  }
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalCss />
      <GuideLines />

        {
          // no smooth scroll effect
          !scrollEffect
            ? <ParallaxProvider>
                {children}
              </ParallaxProvider>

            // locomotive-scroll: https://github.com/locomotivemtl/locomotive-scroll
            : scrollEffect === 'locomotive'
              ? <LocomotiveProvider
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
                  <div data-scroll-container ref={containerRef}>
                    {children}
                  </div>
                </LocomotiveProvider>

              // scroller-motion: https://scroller-motion.js.org/?path=/story/scrollermotion--motion-listeners
              : scrollEffect === 'motion'
                ? <ParallaxProvider>
                    <ScrollerMotion disabled={!isDesktop}>
                      {children}
                    </ScrollerMotion>
                  </ParallaxProvider>

                // no smooth scroll effect
                : <ParallaxProvider>
                    {children}
                  </ParallaxProvider>
        }
    </ChakraProvider>

  )
}
