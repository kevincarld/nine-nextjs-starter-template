import React from 'react'
import { Box } from '@chakra-ui/react'

export default function PreLine({content}) {
  return (
    <>
      <Box sx={{
        whiteSpace: 'pre-line'
      }}>
        {`${content}`}
      </Box>
    </>
  )
}