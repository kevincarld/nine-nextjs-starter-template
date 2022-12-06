import React from 'react'
//chakra
import { Box } from '@chakra-ui/react'

export default function SpacerY({children, ...rest}) {
  return (
    <Box py={{tabletW: '100px'}} {...rest}>
      {children}
    </Box>
  )
}
