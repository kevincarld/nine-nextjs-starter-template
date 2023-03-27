import React from 'react'
// chakra
import { Box, Link, Text } from "@chakra-ui/react"


export default function FeatureHeader({svg, href, ...rest}) {
  return (
    <Box
      display='flex' flexDir='column' alignItems='center' justifyContent="center"
      pos='absolute' top='0' left='0' right='0' zIndex={30}
      {...rest}
    >
      <Text sx={{
        fontSize: {base: '9px', d: '12px'},
        fontFamily: 'Arial',
        mb: '15px',
        color:'white',
      }}>
        ADVERTISING FEATURE
      </Text>

      <Link maxW={'100px'} href={href} target={'_blank'} rel="sponsored" aria-label={`link to ${process.env.brand}`} sx={{'svg': {w:'full'}}}>
        {svg}
      </Link>
    </Box>
  )
}
