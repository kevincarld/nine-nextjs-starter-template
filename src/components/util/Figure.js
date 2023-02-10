import React from 'react'
import { Box } from '@chakra-ui/react'

export default function Figure({children, ...rest}) {
  return (
    <Box as='figure' {...rest}>{children}</Box>
  )
}
