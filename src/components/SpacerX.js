import React from 'react'
//chakra
import { Box } from '@chakra-ui/react'

export default function SpacerX({children, ...rest}) {
  return (
    <Box px={{tabletW: '40px', wide: 0}} {...rest}>
      {children}
    </Box>
  )
}
