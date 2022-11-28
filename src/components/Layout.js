import React from 'react';
//chakra
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import customTheme from 'theme';

export default function Layout({children}) {
  return (
    <ChakraProvider theme={customTheme}>
      <Box as='main'>
        {children}
      </Box>
    </ChakraProvider>

  )
}
