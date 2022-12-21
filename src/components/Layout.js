import React from 'react';
//chakra
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
//
import customTheme from 'theme';
import GlobalCss from 'theme/components/GlobalCss';
import MastheadProvider from './MastheadProvider';

export default function Layout({children}) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalCss />
      <Box as='main'>
        <MastheadProvider>
          {children}
        </MastheadProvider>
      </Box>
    </ChakraProvider>

  )
}
