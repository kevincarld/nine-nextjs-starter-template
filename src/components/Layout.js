import React from 'react';
//chakra
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
//
import customTheme from 'theme';
import Fonts from 'theme/components/Fonts';
import MastheadProvider from './MastheadProvider';

export default function Layout({children}) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      {/* <Fonts /> */}
      <Box as='main'>
        {children}
      </Box>
    </ChakraProvider>

  )
}
