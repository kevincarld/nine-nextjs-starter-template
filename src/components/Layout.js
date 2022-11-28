import React from 'react';
//chakra
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import customTheme from 'theme';

export default function Layout({children}) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Box as='main'>
        {children}
      </Box>
    </ChakraProvider>

  )
}
