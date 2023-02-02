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

export default function Layout({children}) {
  const [isDesktop] = useMediaQuery(`(min-width: 1280px)`)

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalCss />
        <ParallaxProvider>
          {isDesktop
            ?
            <ScrollerMotion>
              <MastheadProvider>
                {children}
              </MastheadProvider>
            </ScrollerMotion>
            :
            <MastheadProvider>
                {children}
            </MastheadProvider>
          }
        </ParallaxProvider>
    </ChakraProvider>

  )
}
