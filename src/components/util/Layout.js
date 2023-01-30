import React from 'react';
//chakra
import { ChakraProvider } from '@chakra-ui/react'
//
import customTheme from 'theme';
import GlobalCss from 'theme/components/GlobalCss';
import MastheadProvider from './MastheadProvider';
import { ParallaxProvider } from 'react-scroll-parallax'
import { ScrollerMotion } from 'scroller-motion'

export default function Layout({children}) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalCss />
        <ParallaxProvider>
          <MastheadProvider>
            {/* <ScrollerMotion> */}
              {children}
            {/* </ScrollerMotion> */}
          </MastheadProvider>
        </ParallaxProvider>
    </ChakraProvider>

  )
}
